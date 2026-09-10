import { build } from 'esbuild';
import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('assets',{recursive:true});
await build({entryPoints:['viewer/main.jsx'], bundle:true, format:'iife', outfile:'assets/viewer.js', minify:true, legalComments:'eof', define:{'process.env.NODE_ENV':'"production"'}, target:['es2020']});
await copyFile('viewer/style.css','assets/viewer.css');
console.log('Offline React + Three.js viewer built.');
