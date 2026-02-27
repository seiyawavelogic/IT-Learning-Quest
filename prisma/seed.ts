import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.userBadge.deleteMany();
  await prisma.badge.deleteMany();
  await prisma.learningHistory.deleteMany();
  await prisma.userProgress.deleteMany();
  await prisma.quizQuestion.deleteMany();
  await prisma.term.deleteMany();
  await prisma.user.deleteMany();

  // Seed badges
  const badges = await Promise.all([
    prisma.badge.create({
      data: {
        name: '初心者卒業',
        emoji: '🎓',
        color: 'blue',
        condition: '50個の用語を学習',
        description: '50個以上の用語を学習した時に獲得',
      },
    }),
    prisma.badge.create({
      data: {
        name: '7日連続学習',
        emoji: '🔥',
        color: 'orange',
        condition: '7日連続で学習',
        description: '7日連続で学習を続けた時に獲得',
      },
    }),
    prisma.badge.create({
      data: {
        name: '50用語達成',
        emoji: '📚',
        color: 'emerald',
        condition: '50個の用語をマスター',
        description: '50個の用語を完全にマスターした時に獲得',
      },
    }),
    prisma.badge.create({
      data: {
        name: 'パーフェクト',
        emoji: '⭐',
        color: 'amber',
        condition: 'クイズで100%の正解率',
        description: 'クイズで満点を取った時に獲得',
      },
    }),
    prisma.badge.create({
      data: {
        name: '100用語達成',
        emoji: '🏆',
        color: 'rose',
        condition: '100個の用語をマスター',
        description: '100個の用語を完全にマスターした時に獲得',
      },
    }),
    prisma.badge.create({
      data: {
        name: 'クイズマスター',
        emoji: '✅',
        color: 'cyan',
        condition: 'クイズに10回正解',
        description: 'クイズに10回以上正解した時に獲得',
      },
    }),
  ]);

  // Seed terms (50個のIT用語)
  const terms = await Promise.all([
    prisma.term.create({
      data: {
        term: 'API',
        shortDesc: 'アプリケーション間のデータ連携方法',
        fullDesc: 'Application Programming Interface の略。ソフトウェアがリクエストを通じて他のソフトウェアの機能を利用するためのインターフェース。',
        category: '実務IT用語',
        tags: ['基礎', 'ネットワーク'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'クラウド',
        shortDesc: 'インターネット経由でサービスを利用',
        fullDesc: 'インターネット経由でサーバーやストレージ、ソフトウェアなどのリソースを利用する計算モデル。',
        category: '実務IT用語',
        tags: ['インフラ', 'AWS'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'データベース',
        shortDesc: 'データを体系的に管理するシステム',
        fullDesc: 'データを効率的に保存、検索、更新できるソフトウェア。リレーショナルデータベースやNoSQLなどの種類がある。',
        category: '基本情報技術者',
        tags: ['DB', '基礎'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'レスポンシブデザイン',
        shortDesc: '様々な画面サイズに対応するUI設計',
        fullDesc: 'PCやスマートフォンなど、様々な画面サイズに自動で調整されるウェブデザイン手法。',
        category: '実務IT用語',
        tags: ['フロント', 'UI/UX'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'キャッシュ',
        shortDesc: 'アクセスが遅いデータを高速に取得',
        fullDesc: 'よくアクセスされるデータを高速なメモリに一時保存し、アクセス速度を向上させる技術。',
        category: '基本情報技術者',
        tags: ['パフォーマンス', '基礎'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'セキュリティ',
        shortDesc: 'システムの情報を守る対策',
        fullDesc: 'コンピュータシステムやネットワークを不正アクセスや攻撃から保護すること。',
        category: '基本情報技術者',
        tags: ['セキュリティ', '重要'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'フレームワーク',
        shortDesc: 'アプリ開発の基盤となるライブラリ集',
        fullDesc: 'プログラミングの際に汎用的な処理を事前に実装したもの。開発効率を大幅に向上させる。',
        category: '実務IT用語',
        tags: ['開発', 'ツール'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'マイクロサービス',
        shortDesc: '小さなサービスに分割したアーキテクチャ',
        fullDesc: 'アプリケーションを小さな独立したサービスに分割し、疎結合で構築するアーキテクチャパターン。',
        category: '応用情報技術者',
        tags: ['アーキテクチャ', '発展'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'コンテナ',
        shortDesc: 'アプリを独立した環境で実行',
        fullDesc: 'アプリケーションと依存関係を一つのパッケージにしたもの。どの環境でも同じように動作する。',
        category: '実務IT用語',
        tags: ['インフラ', 'Docker'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'Git',
        shortDesc: 'ソースコードのバージョン管理ツール',
        fullDesc: 'コードの変更履歴を記録し、複数人での開発を効率的に行うための分散バージョン管理システム。',
        category: '実務IT用語',
        tags: ['開発ツール', '必須'],
      },
    }),
    // ...既存データ...
    prisma.term.create({
      data: {
        term: 'REST API',
        shortDesc: 'HTTPを使用した標準的なAPI設計',
        fullDesc: 'REpresentational State Transfer の略。HTTPメソッドを活用したシンプルで扱いやすいAPI設計パターン。',
        category: '実務IT用語',
        tags: ['API', 'ウェブ'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'SQL',
        shortDesc: 'データベースを操作する言語',
        fullDesc: 'Structured Query Language の略。リレーショナルデータベースのデータを検索、挿入、更新、削除するための標準言語。',
        category: '基本情報技術者',
        tags: ['DB', '言語'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'JavaScript',
        shortDesc: 'ウェブブラウザで動作するプログラミング言語',
        fullDesc: 'ブラウザで実行される高性能なプログラミング言語。インタラクティブなウェブアプリの開発に使用される。',
        category: '実務IT用語',
        tags: ['言語', 'フロント'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'TypeScript',
        shortDesc: 'JavaScriptに型安全性を加えた言語',
        fullDesc: 'JavaScriptの上位互換言語。静的型付けにより大規模なプロジェクトでも安心して開発できる。',
        category: '実務IT用語',
        tags: ['言語', 'フロント'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'React',
        shortDesc: 'UIを構築するJavaScriptライブラリ',
        fullDesc: 'Facebookが開発したコンポーネントベースのライブラリ。再利用可能なUI部品でアプリを効率的に開発できる。',
        category: '実務IT用語',
        tags: ['フレームワーク', 'フロント'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'Node.js',
        shortDesc: 'サーバーサイドで動作するJavaScript',
        fullDesc: 'JavaScriptをブラウザ外の環境（サーバー側）で実行できるランタイム。バックエンド開発に使用される。',
        category: '実務IT用語',
        tags: ['バック', '言語'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'CI/CD',
        shortDesc: '自動化されたソフトウェア開発プロセス',
        fullDesc: 'Continuous Integration / Continuous Deployment の略。コード変更を自動でテスト・デプロイする仕組み。',
        category: '応用情報技術者',
        tags: ['DevOps', '発展'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'JSON',
        shortDesc: 'データを記述するテキスト形式',
        fullDesc: 'JavaScript Object Notation の略。人間が読みやすく、プログラムでも扱いやすいデータ形式。',
        category: '基本情報技術者',
        tags: ['データ形式', '基礎'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'ブロックチェーン',
        shortDesc: '改ざんされない分散台帳技術',
        fullDesc: 'トランザクション履歴を暗号学的に安全に記録する技術。仮想通貨やスマートコントラクトに使用される。',
        category: '応用情報技術者',
        tags: ['発展', 'セキュリティ'],
      },
    }),
    prisma.term.create({
      data: {
        term: '機械学習',
        shortDesc: 'データからパターンを学習する技術',
        fullDesc: 'プログラムが大量のデータからパターンやルールを自動的に学習する技術。AIの基盤となる。',
        category: '応用情報技術者',
        tags: ['AI', '発展'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'クラウドストレージ',
        shortDesc: 'インターネット上にデータを保存',
        fullDesc: 'インターネット経由で利用できるファイル保存サービス。Google DriveやDropboxなどが代表例。',
        category: '実務IT用語',
        tags: ['クラウド', 'ストレージ'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'エンドポイント',
        shortDesc: 'APIの接続先のURL',
        fullDesc: 'クライアントがサーバーに対してリクエストを送信するURL。各機能に対応した複数のエンドポイントがある。',
        category: '実務IT用語',
        tags: ['API', 'ネットワーク'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'トークン',
        shortDesc: 'ユーザー認証用の識別情報',
        fullDesc: 'ログイン時に発行される認証情報。リクエストに含めることでユーザー認証を行う。',
        category: '実務IT用語',
        tags: ['認証', 'セキュリティ'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'ORM',
        shortDesc: 'データベースをプログラムで操作',
        fullDesc: 'Object Relational Mapping の略。SQLを直接書かずにプログラムの記法でデータベースを操作できる。',
        category: '実務IT用語',
        tags: ['DB', 'ツール'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'スキーマ',
        shortDesc: 'データベースの構造定義',
        fullDesc: 'テーブルの列、データ型、制約などの構造を定義したもの。データベースの設計図となる。',
        category: '基本情報技術者',
        tags: ['DB', '基礎'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'インデックス',
        shortDesc: 'データベース検索を高速化',
        fullDesc: '特定の列に対して作成する索引。検索速度を大幅に向上させるが、挿入・更新時は処理が遅くなる。',
        category: '基本情報技術者',
        tags: ['DB', 'パフォーマンス'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'ビッグデータ',
        shortDesc: '従来の手法では扱えない大規模データ',
        fullDesc: 'Volume（量）、Velocity（速度）、Variety（多様性）の3Vが特徴。Hadoop等で分析される。',
        category: '応用情報技術者',
        tags: ['データ分析', '発展'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'リポジトリ',
        shortDesc: 'バージョン管理システムの保管庫',
        fullDesc: 'Gitなどで管理されるプロジェクトの全体。リモートリポジトリはサーバー上、ローカルリポジトリは手元のPC上。',
        category: '実務IT用語',
        tags: ['Git', '開発ツール'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'デプロイ',
        shortDesc: 'アプリケーションを本番環境に配置',
        fullDesc: '開発したプログラムを実運用が行われるサーバーに配置すること。ビルド後に行われる。',
        category: '実務IT用語',
        tags: ['運用', 'DevOps'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'ロードバランシング',
        shortDesc: '複数サーバーに負荷を分散',
        fullDesc: 'アクセスを複数のサーバーに振り分けて、サーバーの負荷を分散させる技術。高可用性を実現する。',
        category: '応用情報技術者',
        tags: ['インフラ', '発展'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'ファイアウォール',
        shortDesc: 'ネットワークのセキュリティ対策',
        fullDesc: 'ネットワークの出入口で不正通信を遮断する防御装置。設定されたルールに基づいて通信を制御する。',
        category: '基本情報技術者',
        tags: ['ネットワーク', 'セキュリティ'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'DNS',
        shortDesc: 'ドメイン名からIPアドレスを取得',
        fullDesc: 'Domain Name System の略。example.comなどのドメイン名を対応するIPアドレスに変換するシステム。',
        category: '基本情報技術者',
        tags: ['ネットワーク', '基礎'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'HTTP/HTTPS',
        shortDesc: 'ウェブの通信プロトコル',
        fullDesc: 'HyperText Transfer Protocol の略。HTTPSはHTTPを暗号化したもの。ウェブサイトのアクセスに使用される。',
        category: '基本情報技術者',
        tags: ['ネットワーク', '基礎'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'TCP/IP',
        shortDesc: 'インターネット通信の基本プロトコル',
        fullDesc: 'Transmission Control Protocol と Internet Protocol の組み合わせ。インターネット通信の標準となっている。',
        category: '基本情報技術者',
        tags: ['ネットワーク', '基礎'],
      },
    }),
    prisma.term.create({
      data: {
        term: '暗号化',
        shortDesc: 'データを読み取り不可な状態にする',
        fullDesc: '秘密鍵を使ってデータを変換し、読み取り不可にすること。セキュアな通信に必須。',
        category: '基本情報技術者',
        tags: ['セキュリティ', '基礎'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'SSL証明書',
        shortDesc: 'ウェブサイトの身元を保証',
        fullDesc: 'ウェブサイトがHTTPSで安全に通信していることを証明するファイル。ブラウザの信頼マークが表示される。',
        category: '実務IT用語',
        tags: ['セキュリティ', 'ウェブ'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'オブジェクト指向',
        shortDesc: 'プログラミングの設計思想',
        fullDesc: 'プログラムを「オブジェクト」という単位で設計すること。再利用性や保守性が向上する。',
        category: '基本情報技術者',
        tags: ['プログラミング', '基礎'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'アルゴリズム',
        shortDesc: '問題を解くための手順',
        fullDesc: '特定の問題を効率的に解くための処理手順。ソートやサーチなど様々なアルゴリズムがある。',
        category: '基本情報技術者',
        tags: ['プログラミング', '基礎'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'デバッグ',
        shortDesc: 'プログラムのバグを発見・修正',
        fullDesc: 'プログラム内のエラー（バグ）を探し出し、修正すること。効率的なデバッグはスキル向上に重要。',
        category: '実務IT用語',
        tags: ['開発', '技能'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'リファクタリング',
        shortDesc: 'プログラムを改善する',
        fullDesc: 'プログラムの動作を変えずに、コードを整理し読みやすく・保守しやすくすること。',
        category: '実務IT用語',
        tags: ['開発', 'コード品質'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'テスト駆動開発',
        shortDesc: 'テストコードを先に書く開発手法',
        fullDesc: 'Test Driven Development の略。テストを先に書いてからプログラムを実装する開発スタイル。品質が向上する。',
        category: '応用情報技術者',
        tags: ['開発手法', '発展'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'スクラム',
        shortDesc: 'アジャイル開発の実践的な枠組み',
        fullDesc: 'スプリントと呼ばれる短い開発サイクルを繰り返す開発手法。迅速な対応が可能。',
        category: '応用情報技術者',
        tags: ['開発手法', '発展'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'ユースケース図',
        shortDesc: 'ユーザーとシステムの関係を図示',
        fullDesc: 'システムがどんなアクターにどんな機能を提供するかを図解するUML図。要件定義で使用される。',
        category: '基本情報技術者',
        tags: ['設計', 'UML'],
      },
    }),
    prisma.term.create({
      data: {
        term: 'クラス図',
        shortDesc: 'クラスの構造と関係を図示',
        fullDesc: 'オブジェクト指向の設計で使用するUML図。属性、メソッド、クラス間の関係が表現される。',
        category: '応用情報技術者',
        tags: ['設計', 'UML'],
      },
    }),
  ]);

  // Seed quiz questions (20問)
  await Promise.all([
    prisma.quizQuestion.create({
      data: {
        question: 'APIとは何の略ですか？',
        options: [
          'Application Programming Interface',
          'Application Process Information',
          'Advanced Program Integration',
          'API Program Instruction',
        ],
        answerIndex: 0,
        category: '実務IT用語',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'クラウドコンピューティングの特徴として正しいものはどれですか？',
        options: [
          'インターネット経由でITリソースを利用する',
          '高性能なPC本体が必須',
          'オフラインでのみ使用可能',
          '個人のみが利用できる技術',
        ],
        answerIndex: 0,
        category: '実務IT用語',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'SQLとは何のための言語ですか？',
        options: [
          'データベースを操作するための言語',
          'ウェブサイトのデザイン言語',
          'サーバー設定用言語',
          'ゲーム開発専用言語',
        ],
        answerIndex: 0,
        category: '基本情報技術者',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'Gitの主な用途は？',
        options: [
          'ソースコードのバージョン管理',
          'データベース管理',
          'ウェブサーバーの設定',
          'セキュリティの管理',
        ],
        answerIndex: 0,
        category: '実務IT用語',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'JavaScriptはどこで主に実行されますか？',
        options: [
          'ウェブブラウザ',
          'メインフレーム',
          'ルータ',
          'プリンタ',
        ],
        answerIndex: 0,
        category: '実務IT用語',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'キャッシュの役割は？',
        options: [
          'アクセス速度を向上させる',
          'データを永遠に保存する',
          'セキュリティを強化する',
          'ネットワークを拡張する',
        ],
        answerIndex: 0,
        category: '基本情報技術者',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'HTTPSのSは何を意味しますか？',
        options: [
          'Secure（安全）',
          'Server（サーバー）',
          'Standard（標準）',
          'Source（ソース）',
        ],
        answerIndex: 0,
        category: '基本情報技術者',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'DNSの主な役割は？',
        options: [
          'ドメイン名をIPアドレスに変換する',
          'ファイルを圧縮する',
          'ウイルスをスキャンする',
          'ネットワーク速度を上げる',
        ],
        answerIndex: 0,
        category: '基本情報技術者',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'Reactとは何ですか？',
        options: [
          'UIを構築するJavaScriptライブラリ',
          'データベース管理システム',
          'サーバー構築言語',
          'ネットワークプロトコル',
        ],
        answerIndex: 0,
        category: '実務IT用語',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'Node.jsの特徴は？',
        options: [
          'JavaScriptをサーバーサイドで実行できる',
          'ゲーム開発に特化している',
          'スマートフォンアプリのみ開発可能',
          'Linuxのコマンド',
        ],
        answerIndex: 0,
        category: '実務IT用語',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'コンテナ技術とは何ですか？',
        options: [
          'アプリと依存関係を一つのパッケージにしたもの',
          'データ保存用の物理的な箱',
          'ネットワークケーブルの種類',
          'パソコンのメモリ',
        ],
        answerIndex: 0,
        category: '実務IT用語',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'ORM（Object Relational Mapping）の利点は？',
        options: [
          'SQLを直接書かずにDBを操作できる',
          'CPUの速度が上がる',
          'ディスク容量が増える',
          'インターネット速度が上がる',
        ],
        answerIndex: 0,
        category: '実務IT用語',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'REST APIとは？',
        options: [
          'HTTPを使用した標準的なAPI設計',
          '暗号化されたAPIプロトコル',
          'データベースクエリ言語',
          'セキュリティ認証方式',
        ],
        answerIndex: 0,
        category: '実務IT用語',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'ファイアウォールの役割は？',
        options: [
          'ネットワークの出入口で不正通信を遮断',
          'ファイルを圧縮する',
          'メールを送受信する',
          'ウェブページを表示する',
        ],
        answerIndex: 0,
        category: '基本情報技術者',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'デプロイとは何ですか？',
        options: [
          'アプリケーションを本番環境に配置する',
          'プログラムをコンパイルする',
          'バグをテストする',
          'ドキュメントを作成する',
        ],
        answerIndex: 0,
        category: '実務IT用語',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'マイクロサービスアーキテクチャの特徴は？',
        options: [
          'アプリを小さな独立したサービスに分割',
          'すべての処理を1つの大きなプログラムにまとめる',
          'クライアントサイドのみで処理する',
          'データベースなしで動作する',
        ],
        answerIndex: 0,
        category: '応用情報技術者',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'CI/CDの意味は？',
        options: [
          'Continuous Integration / Continuous Deployment',
          'Client Initiated / Client Delivered',
          'Code Inspection / Code Deployment',
          'Central Infrastructure / Central Database',
        ],
        answerIndex: 0,
        category: '応用情報技術者',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'テスト駆動開発の特徴は？',
        options: [
          'テストコードを先に書く',
          'テストコードは後で書く',
          'テストコードは不要',
          'テストは本番環境で行う',
        ],
        answerIndex: 0,
        category: '応用情報技術者',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'レスポンシブデザインの目的は？',
        options: [
          '様々な画面サイズに対応させる',
          'サーバーの応答速度を上げる',
          'セキュリティを強化する',
          'データベースの容量を増やす',
        ],
        answerIndex: 0,
        category: '実務IT用語',
      },
    }),
    prisma.quizQuestion.create({
      data: {
        question: 'JSONの特徴は？',
        options: [
          '人間が読みやすく、プログラムでも扱いやすい',
          'バイナリ形式のデータ',
          'Excel形式のデータ',
          'ビデオファイルの形式',
        ],
        answerIndex: 0,
        category: '基本情報技術者',
      },
    }),
  ]);

  // Seed test user
  const hashedPassword = await bcrypt.hash('password123', 10);
  const testUser = await prisma.user.create({
    data: {
      name: '学習者',
      email: 'test@example.com',
      password: hashedPassword,
      level: 1,
      exp: 100,
    },
  });

  console.log('✅ Seed data created successfully!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
