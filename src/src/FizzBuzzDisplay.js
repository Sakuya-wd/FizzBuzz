
//const FizzBuzzCalc = require('./FizzBuzzCalc.js');
import {FizzBuzzCalc} from "./FizzBuzzCalc.js";


const FizzBuzzDisplay = () =>{

  for(let i=1; i<=100; i++){

      console.log(FizzBuzzCalc(i));

  }

}


FizzBuzzDisplay();

