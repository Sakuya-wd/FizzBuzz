const FizzBuzzCalc = require("../src/FizzBuzzCalc.js");

describe("FizzBuzzCalc関数を単体テストする。", () => {
  test("引数が整数でない時、エラーを出力する。", () => {
    expect(() => FizzBuzzCalc("test")).toThrow();
    expect(() => FizzBuzzCalc(1.1)).toThrow();
  });

  test("引数が1未満または100より大きい時、エラーを出力する。", () => {
    expect(() => FizzBuzzCalc(-1)).toThrow();
    expect(() => FizzBuzzCalc(101)).toThrow();
  });

  test("例外処理以外の仕様が網羅されているかを確認。", () => {
    expect(FizzBuzzCalc(15)).toBe("FizzBuzz");
    expect(FizzBuzzCalc(3)).toBe("Fizz");
    expect(FizzBuzzCalc(5)).toBe("Buzz");
    expect(FizzBuzzCalc(1)).toBe(1);
  });
});
