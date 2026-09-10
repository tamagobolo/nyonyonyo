#!/usr/bin/env python3
"""Install only this toolkit's names; never replace unrelated existing definitions."""
import argparse
import json
import os
from pathlib import Path
import shutil
import sys
import tomllib

ROOT = Path(__file__).resolve().parents[1]
SKILLS = (
    'codebase-atlas', 'codebase-watch', 'agent-fit-review',
    'codebase-design', 'domain-modeling', 'code-review', 'diagnosing-bugs',
    'tdd', 'improve-codebase-architecture', 'frontend-design',
    'consulting-slide-review', 'astra-orchestrator', 'ponytail',
    'ponytail-review', 'archify',
)
AGENTS = ('codebase_cartographer', 'codebase_sentinel', 'agent_fit_reviewer')


def main(argv=None):
    parser = argparse.ArgumentParser(description='Observatoryのスキルとエージェントを導入')
    parser.add_argument('--scope', choices=['user', 'project'], default='user')
    parser.add_argument('--project', type=Path)
    parser.add_argument('--dry-run', action='store_true')
    args = parser.parse_args(argv)
    if args.scope == 'project' and not args.project: parser.error('--scope project には --project が必要です')
    codehome = Path(os.environ.get('CODEX_HOME', str(Path.home() / '.codex'))).expanduser()
    skill_target = codehome / 'skills' if args.scope == 'user' else args.project.resolve() / '.agents/skills'
    agent_target = codehome / 'agents' if args.scope == 'user' else args.project.resolve() / '.codex/agents'
    operations = []
    for name in SKILLS:
        source, target = ROOT / 'skills' / name, skill_target / name
        if not (source / 'SKILL.md').is_file():
            raise ValueError(f'配布元スキルが見つかりません: {source}')
        if target.is_symlink() and target.resolve() == source.resolve(): continue
        if target.exists() or target.is_symlink(): raise ValueError(f'既存定義を保護するため中断: {target}')
        operations.append(('symlink', source, target))
    for name in AGENTS:
        source, target = ROOT / 'agents' / (name + '.toml'), agent_target / (name + '.toml')
        data = tomllib.loads(source.read_text())
        if not all(isinstance(data.get(key), str) and data[key] for key in ('name','description','developer_instructions')): raise ValueError(f'不正なエージェント: {source}')
        if target.exists() and not target.is_symlink() and target.read_bytes() == source.read_bytes(): continue
        if target.exists() or target.is_symlink(): raise ValueError(f'既存定義を保護するため中断: {target}')
        operations.append(('copy', source, target))
    for mode, source, target in operations:
        if not args.dry_run:
            target.parent.mkdir(parents=True, exist_ok=True)
            if mode == 'symlink': target.symlink_to(source, target_is_directory=True)
            else:
                with target.open('xb') as stream: stream.write(source.read_bytes())
        print(json.dumps(dict(action='planned' if args.dry_run else 'installed', type=mode, target=str(target)), ensure_ascii=False))
    if not operations: print('既に同じ定義が導入されています。変更なし。')
    return 0


if __name__ == '__main__':
    try: sys.exit(main())
    except (ValueError, OSError) as exc:
        print(str(exc), file=sys.stderr); sys.exit(2)
