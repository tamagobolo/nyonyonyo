# Kiro の機能とチームでの役割

[入口に戻る](../README.md) · [公式情報の確認日と出典](../sources.md)

## 最初に押さえること

Kiro は、要件・設計・タスクを作成し、コード変更と検証を支援する開発エージェントです。本書では「何を任せたか」「何を根拠に完了とするか」をファイルと PR に残し、別の担当者が引き継げるように運用します。対象コードの説明は、チャットでの推測ではなく、実ファイル・実行結果と照合します。

## 使い分け

| 機能 | Kiro の公式上の役割 | 本書での使い方 |
|---|---|---|
| Specs | 変更ごとの要件・設計・タスクを構造化 | 変更の契約。何を作るか、どこまで完了したかを共有 |
| Steering | プロジェクトの方針・技術・構造を継続的に伝える | 複数の変更に共通する、確認済みの前提 |
| Agent Skills | 必要なときに読み込む再利用可能な手順 | 今回の3つの設計思考を呼び分ける |
| Hooks | イベントに応じてコマンドやプロンプトを実行 | チームで確認済みの反復チェックを補助 |
| MCP | 外部ツールやデータへの接続 | 必要なサービスだけ接続。権限は個別に管理 |
| Permissions | エージェントが操作できる範囲を制御 | 作業に必要な操作範囲と、組織の権限を合わせる |

出典：[Specs](https://kiro.dev/docs/specs/)・[Steering](https://kiro.dev/docs/steering/)・[Skills](https://kiro.dev/docs/skills/)・[Hooks](https://kiro.dev/docs/hooks/)・[Permissions](https://kiro.dev/docs/permissions/)。MCP は公式ドキュメントの機能項目として掲載されています。[公式 Docs](https://kiro.dev/docs/)

Steering に一度限りの作業計画をためず、Specs に置きます。Skills に会社の全規程を複製せず、必要な前提ファイルを入力として指定します。技術スタックやディレクトリ構造を変えたら、実装と Steering を同じ変更で更新する運用を推奨します。

## 利用する画面

| 利用面 | この導入での担当 | 本書の扱い |
|---|---|---|
| Kiro IDE | 開発者、技術責任者 | ローカルのコード・差分・テストを見ながら進める標準 |
| Kiro Web | マネージャー、委任する開発者 | 接続済みリポジトリを指定して調査や作業を依頼する選択肢 |
| Kiro CLI | ターミナル中心の開発者 | 既存の CLI 運用がある場合に採用。コマンドは導入版のヘルプで確認 |

Kiro Web の通常セッションは対話型で、New session → Select repo → 依頼入力から開始できます。PR を作成するよう依頼する操作は外部のリポジトリを変更します。[Web の操作](https://kiro.dev/docs/web/using-the-agent/)

GitHub 連携ではアプリ側の対象リポジトリ設定と利用者自身の権限が必要です。作業の委任には書き込み権限が必要とされています。マネージャーにその権限がない場合は、変更依頼を作成して開発者へ渡す運用で構いません。同じ Issue を複数人が委任すると別タスクになり得るため、委任担当者を1名に決めます。[GitHub 連携](https://kiro.dev/docs/web/github/)

## Spec の選び方

| 状況 | 入口 | このチーム運用での確認点 |
|---|---|---|
| 利用者の困りごとから機能を改善 | Feature / Requirements-First | 要件と対象外を先に決め、既存の制約を設計へ反映 |
| API移行・基盤制約など技術上の起点が明確 | Feature / Design-First | 設計から導いた要件が業務目的を満たすか確認 |
| 原因調査が必要な不具合 | Bugfix Spec | 現在・期待・変えてはいけない振る舞いを分ける |
| 十分理解された小さな変更 | Quick Spec | 一括生成された文書を、実装前に必要な範囲でレビュー |
| 純粋な質問・小さな調査 | 通常のチャット | 根拠・未確認事項を残す。全件に大きな Spec を要求しない |

Requirements-First は要件→設計→タスク、Design-First は設計→要件→タスクです。Quick Spec には各文書間の承認ステップがありません。新任者の初回変更は、途中で前提を照合しやすい通常の Feature Spec を推奨します。[Feature Specs](https://kiro.dev/docs/specs/feature-specs/)・[Quick Spec](https://kiro.dev/docs/specs/quick-spec/)・[Bugfix Specs](https://kiro.dev/docs/specs/bugfix-specs/)

## 成果物の置き場所

公式の基本構造は `.kiro/specs/` 配下の `requirements.md`（バグなら `bugfix.md`）、`design.md`、`tasks.md` です。Steering の基本ファイルは `.kiro/steering/product.md`・`tech.md`・`structure.md`、Skills は `.kiro/skills/<name>/SKILL.md` です。[Specs](https://kiro.dev/docs/specs/)・[Steering](https://kiro.dev/docs/steering/)・[Skills](https://kiro.dev/docs/skills/)

本書では次の追加ファイルを**チーム独自の記録**として提案します。Kiro が自動生成する前提にはしません。

```text
docs/project-context.md                # 実コードに基づく把握シート
docs/changes/<change-id>/brief.md       # 目的・対象外・成功条件
docs/changes/<change-id>/options.md     # 発散した案・採否・根拠
docs/changes/<change-id>/decision.md    # 判断者・対象リビジョン・理由
docs/changes/<change-id>/verification.md # 検証コマンド・結果・残課題
.kiro/specs/<feature>/                 # Kiro の Spec 一式
```

## 権限とレビューを混同しない

「要件を承認した」は、設計された機能に合意したという記録です。「ターミナル操作を許可した」は、ツールに操作権限を与えたという意味です。「PR を承認した」は、リポジトリでのレビュー判断です。本書の G0〜G4 は業務上の判断点で、Kiro の設定項目や組み込みのロールではありません。

Steering に禁止事項を書くことと、操作権限で強制することも別です。権限・保護ブランチ・必須 CI は導入先で確認します。調査プロンプトだけで書き込みが技術的に禁止されるとは扱いません。[Permissions](https://kiro.dev/docs/permissions/)
