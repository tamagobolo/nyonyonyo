#!/usr/bin/env python3
"""Serve exactly one generated report on loopback; no filesystem browsing."""
import argparse
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path

parser=argparse.ArgumentParser()
parser.add_argument('report',type=Path)
parser.add_argument('--port',type=int,default=0)
args=parser.parse_args()
report=args.report.resolve()
if report.name!='report.html' or not report.is_file(): parser.error('生成済みの report.html を指定してください')

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.headers.get('Host') not in {f'127.0.0.1:{self.server.server_port}', f'localhost:{self.server.server_port}'}:
            self.send_error(403); return
        if self.path not in {'/','/report.html'}:
            self.send_error(404);return
        data=report.read_bytes()
        self.send_response(200)
        self.send_header('Content-Type','text/html; charset=utf-8')
        self.send_header('Content-Length',str(len(data)))
        self.send_header('X-Content-Type-Options','nosniff')
        self.send_header('Cache-Control','no-store')
        self.end_headers();self.wfile.write(data)
    def log_message(self,*args): pass

server=HTTPServer(('127.0.0.1',args.port),Handler)
print(f'http://127.0.0.1:{server.server_port}/',flush=True)
try:server.serve_forever()
except KeyboardInterrupt:pass
finally:server.server_close()
