#!/usr/bin/env python3
"""Read Codex skill discovery through its generated, documented app-server protocol."""
import json
from pathlib import Path
import selectors
import subprocess
import time
from install import SKILLS

ROOT=Path(__file__).resolve().parents[1]
WANTED=set(SKILLS)
process=subprocess.Popen(['codex','app-server','--stdio'],stdin=subprocess.PIPE,stdout=subprocess.PIPE,stderr=subprocess.DEVNULL,text=True,bufsize=1)
selector=selectors.DefaultSelector();selector.register(process.stdout,selectors.EVENT_READ)

def request(identity,method,params):
    process.stdin.write(json.dumps({'id':identity,'method':method,'params':params})+'\n');process.stdin.flush()
    deadline=time.monotonic()+25
    while time.monotonic()<deadline:
        if not selector.select(timeout=1): continue
        line=process.stdout.readline()
        if not line: raise RuntimeError('Codex app-server terminated')
        result=json.loads(line)
        if result.get('id')==identity:
            if 'error' in result: raise RuntimeError('Codex rejected the read request')
            return result['result']
    raise TimeoutError('Codex discovery timed out')

try:
    request(1,'initialize',{'clientInfo':{'name':'observatory-verify','version':'1.0.0'},'capabilities':{'experimentalApi':True}})
    process.stdin.write(json.dumps({'method':'initialized'})+'\n');process.stdin.flush()
    response=request(2,'skills/list',{'cwds':[str(ROOT)],'forceReload':True})
    matches=[]
    def walk(value):
        if isinstance(value,dict):
            if value.get('name') in WANTED: matches.append({k:value[k] for k in ('name','path','scope','enabled') if k in value})
            for item in value.values():walk(item)
        elif isinstance(value,list):
            for item in value:walk(item)
    walk(response)
    config=request(3,'config/read',{'cwd':str(ROOT),'includeLayers':False})
    enabled={x['name'] for x in matches if x.get('enabled') is True}
    print(json.dumps({'discovered_skills':matches,'config_read':'success','all_skills_discovered':{x['name'] for x in matches}==WANTED,'all_skills_enabled':enabled==WANTED},ensure_ascii=False,indent=2))
    if enabled!=WANTED:raise SystemExit(1)
finally:
    selector.close();process.terminate()
    try:process.wait(timeout=5)
    except subprocess.TimeoutExpired:process.kill();process.wait()
