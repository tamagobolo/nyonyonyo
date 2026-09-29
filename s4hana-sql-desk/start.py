#!/usr/bin/env python3
"""Serve only the packaged static app on the local loopback interface."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

class LocalHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        super().end_headers()

    def list_directory(self, path):
        self.send_error(403, "Directory listing is disabled")
        return None

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="S/4HANA SQL Desk local server")
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()
    root = Path(__file__).resolve().parent / "dist"
    try:
        server = ThreadingHTTPServer(("127.0.0.1", args.port), partial(LocalHandler, directory=str(root)))
    except OSError as exc:
        raise SystemExit(f"起動できません: {exc}\n別ポート: python3 start.py --port 8766\nまたは dist/index.html を直接開いてください。")
    print(f"S/4HANA SQL Desk: http://127.0.0.1:{args.port}\n終了: Ctrl+C", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nSQL Desk を停止しました。")
    finally:
        server.server_close()
