//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const FizzBuzzCalc = (num) => {
  if (DifferentType(num)) {
    throw new TypeError(
      "引数が整数ではありません。1~100以内の整数のみ引数に設定できます。"
    );
  }

  if (OutOfRange(num)) {
    throw new RangeError(
      "引数が1未満あるいは100より大きいです。1~100以内の整数のみ引数に設定できます。"
    );
  }

  //整数が3と5の公倍数の時は、整数の代わりにFizzBuzzを出力する。(この時にFizzとBuzzは出力しない)
  if (isFizzBuzz(num)) {
    return `FizzBuzz`;

    //3の倍数の時は、整数の代わりにFizzを出力する。
  } else if (isFizz(num)) {
    return `Fizz`;

    //5の倍数の時は、整数の代わりにBuzzを出力する。
  } else if (isBuzz(num)) {
    return `Buzz`;

    //整数が3の倍数でも5の倍数でもない時、整数をそのまま出力する。
  } else {
    return num;
  }
};

const DifferentType = (num) => {
  if (typeof num !== "number") return true;
  if (Math.round(num) != num) return true;
  return false;
};

const OutOfRange = (num) => {
  if (num < 1 || 100 < num) return true;
  return false;
};

const isFizzBuzz = (num) => {
  if (num % 3 == 0 && num % 5 == 0) return true;
  return false;
};

const isFizz = (num) => {
  if (num % 3 == 0) return true;
  return false;
};

const isBuzz = (num) => {
  if (num % 5 == 0) return true;
  return false;
};

module.exports = FizzBuzzCalc;
