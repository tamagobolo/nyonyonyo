#!/usr/bin/env python3
"""Assemble the offline SQL reference using Python's standard library."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"
queries = []
for name in ("performance.json", "operations.json"):
    queries.extend(json.loads((ROOT / "research" / name).read_text(encoding="utf-8")))

allowed_categories = {"prepare", "performance", "locks", "memory", "storage", "operations"}
seen = set()
for q in queries:
    assert q["id"] not in seen, f"Duplicate ID: {q['id']}"
    seen.add(q["id"])
    for key in ("title", "summary", "symptoms", "sql", "views", "columns", "interpretation", "nextSteps", "cautions", "privilege", "scope", "load", "sources", "verified"):
        assert q.get(key), f"Missing {key}: {q['id']}"
    assert q["category"] in allowed_categories
    assert q["load"] in {"低", "中", "高"}
    assert not q.get("parameters"), f"Unsupported parameters: {q['id']}"
    sql = re.sub(r"--[^\n]*", "", q["sql"]).strip()
    assert re.match(r"SELECT\b", sql, re.I), f"Not a SELECT: {q['id']}"
    assert sql.endswith(";"), f"Missing terminator: {q['id']}"
    tokens = re.sub(r"'(?:''|[^'])*'|\"(?:\"\"|[^\"])*\"", "", sql)
    assert len([x for x in tokens.split(";") if x.strip()]) == 1, f"Multiple statements: {q['id']}"
    assert not re.search(r"\b(ALTER|DROP|DELETE|INSERT|UPDATE|TRUNCATE|GRANT|REVOKE|CALL|CREATE|INTO)\b", tokens, re.I), f"Unexpected mutating SQL: {q['id']}"
    assert not re.search(r"SELECT\s+\*", sql, re.I), f"Unbounded projection: {q['id']}"
    assert all(s["url"].startswith("https://help.sap.com/") for s in q["sources"])

DIST.mkdir(exist_ok=True)
(DIST / "catalog.js").write_text("// SAP official references checked; not executed against a customer database.\nwindow.SQL_CATALOG = " + json.dumps(queries, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")

def comment(text):
    return "\n".join("-- " + line for line in text.splitlines())

parts = ["-- S/4HANA SQL Desk | HANA 2.0 on-premise / Private Cloud\n-- 必要なSQLを1つずつ選択して実行してください。全件一括実行はしないでください。\n-- 接続先・権限・負荷の注意を確認してください。社内実機での実行は未検証です。\n"]
(DIST / "sql").mkdir(exist_ok=True)
for q in queries:
    lines = [comment(q["id"] + " | " + q["title"]), comment(q["summary"]), comment(q["scope"]), comment("想定負荷: " + q["load"] + " / 資料照合: " + q["verified"]), comment("権限: " + q["privilege"])]
    lines += [comment("注意: " + c) for c in q["cautions"]]
    lines += [comment("結果: " + c) for c in q["interpretation"]]
    lines += [comment("次の確認: " + c) for c in q["nextSteps"]]
    lines += [comment(s["title"] + ": " + s["url"]) for s in q["sources"]]
    export = "\n".join(lines) + "\n\n" + q["sql"].strip() + "\n"
    parts.append(export)
    (DIST / "sql" / (q["id"] + ".sql")).write_text(export, encoding="utf-8-sig")
(DIST / "all-queries.sql").write_text("\n\n".join(parts), encoding="utf-8-sig")
print(f"Built {len(queries)} read-only recipes in {DIST}")
