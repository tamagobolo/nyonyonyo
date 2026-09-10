#!/usr/bin/env python3
"""Resolve the installed skill symlink to the shared trusted toolkit."""
from pathlib import Path
import sys
import os
TOOLKIT_ROOT = Path(__file__).resolve().parents[3]
runtime = TOOLKIT_ROOT / ".venv/bin/python"
if runtime.is_file() and Path(sys.prefix).resolve() != runtime.parent.parent.resolve():
    os.execv(str(runtime), [str(runtime), str(Path(__file__).resolve()), *sys.argv[1:]])
sys.path.insert(0, str(TOOLKIT_ROOT))
from observatory import main
if __name__ == "__main__":
    sys.exit(main())
