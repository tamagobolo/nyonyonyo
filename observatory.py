#!/usr/bin/env python3
"""Local scan / compare / watch. Python >=3.11; Node >=20 for JS/TS AST."""
import argparse
from contextlib import contextmanager
import fcntl
import json
from pathlib import Path
import sys
import time
import subprocess

from src.scanner import scan, compare, SEVERITY
from src.reporting import write_report, atomic_write


@contextmanager
def output_lock(out):
    out.mkdir(parents=True, exist_ok=True, mode=0o700)
    lock = out / '.scan.lock'
    if lock.is_symlink(): raise ValueError('ロックファイルがシンボリックリンクです')
    with lock.open('a+') as stream:
        try: fcntl.flock(stream, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError: raise ValueError('この出力先では別の監視処理が動作しています') from None
        try: yield
        finally: fcntl.flock(stream, fcntl.LOCK_UN)


def signature(report):
    return json.dumps([report['nodes'], report['edges'], report['findings'], report['coverage'], report['recommendations']], sort_keys=True)


def parser():
    p = argparse.ArgumentParser(description='Codebase Observatory — ローカル構造理解と監視')
    sub = p.add_subparsers(dest='command', required=True)
    sub.add_parser('test', help='このツールの機能テストを実行')
    for name in ('scan', 'watch'):
        q = sub.add_parser(name)
        q.add_argument('--root', required=True, type=Path)
        q.add_argument('--out', type=Path, help='既定: 対象/.observatory。対象外または対象直下の .observatory / reports を指定')
        q.add_argument('--context-root', action='append', default=[], help='追加のskills/agents/hooks設定フォルダ（明示したフォルダのみ読み取り）')
        q.add_argument('--node', default='node')
        q.add_argument('--max-files', type=int, default=20000)
        q.add_argument('--max-bytes', type=int, default=524288)
        q.add_argument('--max-total-bytes', type=int, default=67108864)
        q.add_argument('--fail-on', choices=['none','low','medium','high','critical'], default='none')
        if name=='watch':
            q.add_argument('--interval', type=float, default=30)
            q.add_argument('--iterations', type=int, default=0, help='0で停止まで監視。それ以外は指定回数で終了')
    q = sub.add_parser('compare')
    q.add_argument('before', type=Path); q.add_argument('after', type=Path)
    q.add_argument('--out', type=Path)
    return p


def main(argv=None):
    args = parser().parse_args(argv)
    try:
        if args.command=='test':
            return subprocess.run([sys.executable,'-m','unittest','discover','-s',str(Path(__file__).parent/'tests'),'-v']).returncode
        if args.command=='compare':
            delta = compare(json.loads(args.before.read_text()), json.loads(args.after.read_text()))
            data = json.dumps(delta, ensure_ascii=False, indent=2) + '\n'
            if args.out: atomic_write(args.out, data)
            else: print(data)
            return 0 if delta['reliable'] else 2
        root = args.root.expanduser().resolve()
        out = (args.out or root / '.observatory').expanduser().resolve()
        if out == root or (out.is_relative_to(root) and not any(p in {'.observatory', 'reports'} for p in out.relative_to(root).parts)):
            raise ValueError('出力先は対象外、または対象直下の .observatory / reports 配下にしてください（自己監視ループ防止）')
        if args.command=='watch' and (args.interval < 1 or args.iterations < 0):
            raise ValueError('intervalは1秒以上、iterationsは0以上を指定してください')
        with output_lock(out):
            previous_path = out / 'report.json'
            previous = json.loads(previous_path.read_text()) if previous_path.exists() else None
            count = 0
            while True:
                report = scan(root, node=args.node, max_files=args.max_files, max_bytes=args.max_bytes, max_total_bytes=args.max_total_bytes, baseline=previous, extra_roots=args.context_root)
                changed = previous is None or signature(previous) != signature(report)
                if changed or args.command=='scan':
                    write_report(report, out)
                    event = dict(generated_at=report['generated_at'], findings=len(report['findings']), files=report['stats']['files'], complete=report['coverage']['complete'], delta=report['delta'])
                    # A bounded history of summaries; no target source content.
                    history_path = out / 'history.json'
                    history = json.loads(history_path.read_text()) if history_path.exists() else []
                    atomic_write(history_path, json.dumps((history + [event])[-100:], ensure_ascii=False, indent=2))
                    print(json.dumps(dict(status='updated', report=str(out / 'report.html'), **{k:v for k,v in event.items() if k!='delta'}), ensure_ascii=False), flush=True)
                else:
                    print(json.dumps(dict(status='unchanged', generated_at=report['generated_at']), ensure_ascii=False), flush=True)
                previous = report
                count += 1
                if args.command=='scan' or (args.iterations and count >= args.iterations): break
                time.sleep(args.interval)
        if not report['coverage']['complete']: return 2
        if args.fail_on != 'none' and any(SEVERITY[f['severity']] >= SEVERITY[args.fail_on] for f in report['findings']): return 1
        return 0
    except KeyboardInterrupt:
        print('監視を停止しました。保存済みレポートを保持します。', file=sys.stderr)
        return 130
    except (OSError, ValueError) as exc:
        print(f'監視を完了できません: {exc}', file=sys.stderr)
        return 2


if __name__=='__main__': sys.exit(main())
