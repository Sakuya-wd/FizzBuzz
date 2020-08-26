# FizzBuzz

## 仕様

・ 1〜100までの整数を1から昇順にコンソールに出力する。

・ 整数が3と5の公倍数の時は、整数の代わりに`FizzBuzz`を出力する。(この時に`Fizz`と`Buzz`は出力しない)

・ 整数が3の倍数の時は、整数の代わりに`Fizz`を出力する。

・ 整数が5の倍数の時は、整数の代わりに`Buzz`を出力する。


## テスト

・ 引数が整数でない時、エラーを出力する。

・ 1未満または100より大きい時、エラーを出力する。

・ 整数が3と5の公倍数(15)の時、`FizzBuzz`を出力する。

・ 整数が3の時、`Fizz`を出力する。

・ 整数が5の時、`Buzz`を出力する。

・ 整数が3の倍数でも5の倍数でもない時、`整数`をそのまま出力する。

### プログラム実行

httpサーバーで実行して下さい。

結果はコンソールに表示します。


### テスト実行

Jestでテストを作成していますのでテストを実行する際は、Jestを導入した上で一部ソースの変更願います。


① FizzBuzzDisplay.jsファイルのimport {FizzBuzzCalc} from "./FizzBuzzCalc.js";をコメントし、

　 const FizzBuzzCalc = require('./FizzBuzzCalc.js');のコメントを外して下さい。
  
② FizzBuzzCalc.jsファイルのexport {FizzBuzzCalc};をコメントし、

　 module.exports = FizzBuzzCalc;のコメントを外して下さい。
  
### テスト実行コマンド 

  `npm run test`


