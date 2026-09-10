#!/usr/bin/env python3
"""Check registered skills and their reachable Markdown links without executing them.

Reports document characters, not estimated tokens or measured skill effectiveness.
Code blocks, inline-code examples, external URLs and anchor existence are excluded.
"""
import argparse
import json
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit

import yaml

from install import ROOT, SKILLS


def markdown_targets(body):
    lines, fence = [], None
    for line in body.splitlines():
        marker = re.match(r'^\s*(`{3,}|~{3,})', line)
        if marker:
            token = marker.group(1)
            if fence is None:
                fence = token
            elif token[0] == fence[0] and len(token) >= len(fence):
                fence = None
            continue
        if fence is None:
            lines.append(line)
    prose = re.sub(r'(`+).*?\1', '', '\n'.join(lines))
    inline = re.findall(r'\]\(\s*(<[^>]+>|[^\s)]+)', prose)
    definitions = re.findall(r'^\s*\[[^\]]+\]:\s*(<[^>]+>|\S+)', prose, re.M)
    return [target.strip('<>') for target in inline + definitions]


def check_skill(directory):
    directory = Path(directory).resolve()
    errors, seen, pending = [], set(), [directory / 'SKILL.md']
    entry_chars = linked_chars = 0

    def error(path, message):
        errors.append({'file': str(path), 'message': message})

    try:
        entry = (directory / 'SKILL.md').read_text(encoding='utf-8')
        entry_chars = len(entry)
        match = re.match(r'\A---\r?\n(.*?)\r?\n---(?:\r?\n|$)', entry, re.S)
        if not match:
            raise ValueError('YAML frontmatter がありません')
        meta = yaml.safe_load(match.group(1))
        if not isinstance(meta, dict):
            raise ValueError('frontmatter はmappingで指定してください')
        name, description = meta.get('name'), meta.get('description')
        if not isinstance(name, str) or not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', name) or len(name) > 64:
            error(directory / 'SKILL.md', 'スキル名の形式が不正です')
        if name != directory.name:
            error(directory / 'SKILL.md', 'スキル名とディレクトリ名が一致しません')
        if not isinstance(description, str) or not description.strip() or len(description) > 1024:
            error(directory / 'SKILL.md', 'description は1〜1024文字で指定してください')
    except (OSError, ValueError, yaml.YAMLError) as exc:
        error(directory / 'SKILL.md', str(exc))

    ui_path = directory / 'agents/openai.yaml'
    try:
        ui = yaml.safe_load(ui_path.read_text(encoding='utf-8'))
        if not isinstance(ui, dict) or not isinstance(ui.get('interface'), dict):
            raise ValueError('interface がありません')
        interface = ui['interface']
        for field in ('display_name', 'short_description', 'default_prompt'):
            if not isinstance(interface.get(field), str) or not interface[field].strip():
                error(ui_path, f'interface.{field} がありません')
        short = interface.get('short_description', '')
        if isinstance(short, str) and not 25 <= len(short) <= 64:
            error(ui_path, 'short_description は25〜64文字で指定してください')
        if f'${directory.name}' not in str(interface.get('default_prompt', '')):
            error(ui_path, 'default_prompt に $skill-name がありません')
        if 'policy' in ui:
            policy = ui['policy']
            if not isinstance(policy, dict) or ('allow_implicit_invocation' in policy and type(policy['allow_implicit_invocation']) is not bool):
                error(ui_path, 'policy.allow_implicit_invocation はbooleanです')
        for field in ('icon_small', 'icon_large'):
            if field in interface and (not isinstance(interface[field], str) or not (directory / interface[field]).is_file()):
                error(ui_path, f'{field} のファイルが見つかりません')
    except (OSError, ValueError, yaml.YAMLError) as exc:
        error(ui_path, str(exc))

    while pending:
        path = pending.pop().resolve()
        if path in seen:
            continue
        seen.add(path)
        try:
            body = path.read_text(encoding='utf-8')
        except (OSError, UnicodeError) as exc:
            error(path, str(exc))
            continue
        if path != directory / 'SKILL.md':
            linked_chars += len(body)
        for target in markdown_targets(body):
            try:
                url = urlsplit(target)
                if url.scheme or url.netloc or not url.path:
                    continue
                reference = (path.parent / unquote(url.path)).resolve()
                if not reference.exists():
                    error(path, f'参照先が見つかりません: {target}')
                elif reference.is_file() and reference.suffix.lower() == '.md':
                    pending.append(reference)
            except (OSError, ValueError) as exc:
                error(path, f'参照を解決できません: {target}: {exc}')
    return {'name': directory.name, 'entrypoint_characters': entry_chars,
            'linked_markdown_characters': linked_chars, 'markdown_files_checked': len(seen),
            'errors': errors}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--json', action='store_true')
    args = parser.parse_args()
    results = [check_skill(ROOT / 'skills' / name) for name in SKILLS]
    errors = sum(len(result['errors']) for result in results)
    if len(set(SKILLS)) != len(SKILLS):
        errors += 1
    report = {'skills_checked': len(results), 'errors': errors, 'results': results,
              'limits': '形式・ローカルMarkdown参照のみ。コード中のパス、外部URL、アンカー、実行品質・利用量は未評価。'}
    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        print(f'{len(results)} skills / {errors} errors')
        for result in results:
            for error in result['errors']:
                print(f"{error['file']}: {error['message']}")
    return 1 if errors else 0


if __name__ == '__main__':
    raise SystemExit(main())
