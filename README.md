# IT-Learning-Quest
## 開発環境立ち上げ手順
以下の対応ではdocker-desktopが入っている前提で話を進める<br>

### このブランチをクローン
```
git clone git@github.com:seiyawavelogic/IT-Learning-Quest.git
```

### docker-desktopが立ち上がっている状態で下記のコマンドを実行（ルートディレクトリ配下）
```
sh Docker/sh/create_network.sh
docker-compose build --no-cache
docker-compose up -d
```

### 以下のURLにアクセス
```
http://localhost:3022
```

### QA
#### Q1
何故か該当URLにアクセスできない<br>
該当のポート番号をmac/windowsなどお手持ちの環境で許可していない<br>
（他のアプリケーションで使用していない）かをご確認ください<br>

#### Q2
["npm", "install"]にてエラーが出ている<br>
This is a problem related to network connectivity.<br>
というエラーであるならば、ネットワーク環境に依存しているようです<br>
再度同じコマンドを試すとうまくいく可能性もあるので何度か同じコマンドをお試しください<br>