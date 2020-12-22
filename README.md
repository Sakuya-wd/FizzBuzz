# FizzBuzz

## 開発環境

OS: macOS Catalina(バージョン10.15.6)

ターミナル: Terminal.app

エディター: Visual Studio Code 2

開発言語: JavaScript Jeat

バージョン管理: Git

Node.js: (バージョンv14.7.0)

パッケージ管理: npm (バージョン6.14.8)

使用パッケージ: ESLint Prettier husky lint-staged

## プログラム仕様

・ 1〜100までの整数を1から昇順に出力する。

・ 整数が3と5の公倍数の時は、整数の代わりに`FizzBuzz`を出力する。(この時に`Fizz`と`Buzz`は出力しない)

・ 整数が3の倍数の時は、整数の代わりに`Fizz`を出力する。

・ 整数が5の倍数の時は、整数の代わりに`Buzz`を出力する。

## プログラム実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node FizzBuzzDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## テスト仕様

・ 引数が整数でない時、エラーを出力する。

・ 引数が1未満または100より大きい時、エラーを出力する。

・ 整数が3と5の公倍数(15)の時、`FizzBuzz`を出力する。

・ 整数が3の時、`Fizz`を出力する。

・ 整数が5の時、`Buzz`を出力する。

・ 整数が3の倍数でも5の倍数でもない時、`整数`をそのまま出力する。

## テスト実行
  
node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形
git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。
