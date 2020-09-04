# FizzBuzz

## プログラム仕様

・ 1〜100までの整数を1から昇順にコンソールに出力する。

・ 整数が3と5の公倍数の時は、整数の代わりに`FizzBuzz`を出力する。(この時に`Fizz`と`Buzz`は出力しない)

・ 整数が3の倍数の時は、整数の代わりに`Fizz`を出力する。

・ 整数が5の倍数の時は、整数の代わりに`Buzz`を出力する。

## プログラム実行

httpサーバーで実行を願います。

Web Server for Chromeでhttpサーバーを起動できます。

Web Server for Chromeは下記からインストールできます。

```
https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=ja
```

実行するファイルはsrcに格納しています。

結果はコンソールに表示します。


## テスト仕様

・ 引数が整数でない時、エラーを出力する。

・ 引数が1未満または100より大きい時、エラーを出力する。

・ 整数が3と5の公倍数(15)の時、`FizzBuzz`を出力する。

・ 整数が3の時、`Fizz`を出力する。

・ 整数が5の時、`Buzz`を出力する。

・ 整数が3の倍数でも5の倍数でもない時、`整数`をそのまま出力する。

## テスト実行

srcに格納しているFizzBuzzCalc.jsの一部ソースを下記通りに変更願います。

```javascript
module.exports = FizzBuzzCalc;
//export {FizzBuzzCalc};
```

一部パッケージの追加を願います。

```
npm install jest-cli
```
  
テスト実行コマンド 

```
npm run test
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```
