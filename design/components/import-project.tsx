'use client';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  FileJson2,
  FolderOpen,
  FolderGit2,
  LoaderCircle,
  ShieldCheck,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import type { Atlas } from '@/lib/model';

export default function ImportProject({
  onImport,
}: {
  onImport: (atlas: Atlas) => void;
}) {
  const [tab, setTab] = useState('folder'),
    [url, setUrl] = useState('https://github.com/DietrichGebert/ponytail'),
    [busy, setBusy] = useState(false),
    [status, setStatus] = useState(''),
    [error, setError] = useState('');
  const controller = useRef<AbortController | null>(null);
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      controller.current?.abort();
    };
  }, []);
  async function files(list: FileList | null) {
    if (!list?.length) return;
    setBusy(true);
    setError('');
    setStatus('ソースと設定を解析しています…');
    try {
      const { readLocalFiles } = await import('@/lib/importer');
      const atlas = await readLocalFiles(list);
      if (mounted.current) onImport(atlas);
    } catch (e) {
      if (mounted.current) setError((e as Error).message);
    } finally {
      if (mounted.current) setBusy(false);
    }
  }
  async function github() {
    setBusy(true);
    setError('');
    controller.current = new AbortController();
    const timer = setTimeout(() => controller.current?.abort(), 90_000);
    try {
      const { importGitHub } = await import('@/lib/importer');
      const atlas = await importGitHub(
        url,
        (s) => {
          if (mounted.current) setStatus(s);
        },
        controller.current.signal,
      );
      if (mounted.current) onImport(atlas);
    } catch (e) {
      if (mounted.current)
        setError(
          (e as Error).name === 'AbortError'
            ? '取得を中断しました。再試行するか、ローカルフォルダーを選んでください。'
            : (e as Error).message,
        );
    } finally {
      clearTimeout(timer);
      if (mounted.current) setBusy(false);
    }
  }
  return (
    <div className="import-project">
      <Tabs
        value={tab}
        onValueChange={(v) => {
          setTab(String(v));
          setError('');
        }}
      >
        <TabsList className="import-tabs">
          <TabsTrigger disabled={busy} value="folder">
            <FolderOpen />
            フォルダー
          </TabsTrigger>
          <TabsTrigger disabled={busy} value="github">
            <FolderGit2 />
            GitHub
          </TabsTrigger>
          <TabsTrigger disabled={busy} value="files">
            <FileJson2 />
            ファイル
          </TabsTrigger>
        </TabsList>
        <TabsContent value="folder">
          <div className="import-drop">
            <FolderOpen size={32} />
            <strong>リポジトリのフォルダーを選択</strong>
            <p>ソースと構成ファイルから、要素と参照関係を抽出します。</p>
            <label className="button primary">
              フォルダーを選ぶ
              <input
                className="file-picker"
                aria-label="リポジトリフォルダー"
                type="file"
                {...{ webkitdirectory: '', directory: '' }}
                multiple
                disabled={busy}
                onChange={(e) => {
                  void files(e.target.files);
                  e.target.value = '';
                }}
              />
            </label>
          </div>
          <p className="import-caption">
            JS / TS・Python・Terraform・Prisma・SQL・CloudFormation
            JSON・Wrangler JSON/JSONC。最大450ファイル、各300 KB、合計12 MB。
          </p>
        </TabsContent>
        <TabsContent value="github">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void github();
            }}
            className="github-form"
          >
            <label htmlFor="github-url">公開リポジトリのURL</label>
            <input
              id="github-url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              disabled={busy}
              placeholder="https://github.com/owner/repository"
            />
            <button className="button primary" disabled={busy} type="submit">
              構成を読み込む
              <ArrowRight size={16} />
            </button>
            <p>
              既定ブランチのソースをGitHubから直接取得します。最大160ファイル。非公開リポジトリはフォルダーから読み込めます。
            </p>
          </form>
        </TabsContent>
        <TabsContent value="files">
          <div className="import-drop">
            <FileJson2 size={32} />
            <strong>モデルや構成ファイルを選択</strong>
            <p>
              共通モデルJSON、Terraform、Prisma、SQL、CloudFormation
              JSONなどをまとめて読み込めます。
            </p>
            <input
              aria-label="モデル・構成ファイル"
              type="file"
              multiple
              accept=".json,.jsonc,.tf,.prisma,.sql,.ts,.tsx,.js,.jsx,.py"
              disabled={busy}
              onChange={(e) => {
                void files(e.target.files);
                e.target.value = '';
              }}
            />
          </div>
        </TabsContent>
      </Tabs>
      {busy && (
        <div className="import-progress" role="status">
          <LoaderCircle size={18} />
          {status}
          <button
            className="text-button"
            onClick={() => controller.current?.abort()}
            disabled={tab !== 'github'}
          >
            中断
          </button>
        </div>
      )}
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <div className="privacy-note">
        <ShieldCheck size={17} />
        <p>
          ファイルはブラウザー内で解析します。ローカルのソースをサーバーに送信しません。元のファイルやクラウド環境への変更はありません。
        </p>
      </div>
      <p className="muted">
        現在の編集内容は「書き出す」で保存できます。読み込みに失敗した場合は現在のモデルを保持します。
      </p>
    </div>
  );
}
