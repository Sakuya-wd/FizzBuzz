
const FizzBuzzCalc = (num) =>{

  //整数でない時、あるいは1未満または100より大きい時エラーを出力する。
  if(OutOfRange(num)){

    throw new RangeError("引数が不正です。1~100以内の整数のみ引数に設定できます。");

  //整数が3と5の公倍数の時は、整数の代わりにFizzBuzzを出力する。(この時にFizzとBuzzは出力しない)
  //そのため3の倍数と5の倍数の処理前に3と5の公倍数の処理を行う。
  }else if(isFizzBuzz(num)){

    return `FizzBuzz`;

  //3の倍数の時は、整数の代わりにFizzを出力する
  }else if(isFizz(num)){

    return `Fizz`;

  //5の倍数の時は、整数の代わりにBuzzを出力する
  }else if(isBuzz(num)){

    return `Buzz`;

  //整数が3の倍数でも5の倍数でもない時、整数をそのまま出力する。
  }else{

    return num;

  }

}


const OutOfRange = (num) =>{

  if(typeof num !== "number") return true;
  if(Math.round(num) != num) return true;
  if(num<1 || 100<num) return true;

  return false;

}

const isFizzBuzz = (num) =>{

  if(num%3==0 && num%5==0) return true;

  return  false;

}

const isFizz = (num) =>{

  if(num%3==0) return true;

  return false;

}

const isBuzz = (num) =>{

  if(num%5==0) return true;

  return false;

}


//module.exports = FizzBuzzCalc;
export {FizzBuzzCalc};
