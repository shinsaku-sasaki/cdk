# AWS CDK TypeScript

CDK を TypeScript で構築するサンプルです。

## 準備

事前に、aws configure でアクセスに必要な情報を設定してください。

```sh
docker compose up -d
```

```sh
./login.sh
# コンテナ内で下記を実行
$ npm i
$ cdk bootstrap
```

## コマンド一覧

### スタックを見る

```
cdk ls
```

### デプロイ

```
cdk deploy [スタック名]
```

### 破棄

```
cdk destroy [スタック名]
```
