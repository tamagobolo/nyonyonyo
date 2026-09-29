@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel% equ 0 (
  py -3 start.py
) else (
  start "" "dist\index.html"
)
pause
