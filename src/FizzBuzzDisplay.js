
const FizzBuzzCalc = require('./FizzBuzzCalc.js');


const FizzBuzzDisplay = () =>{

  for(let i=1; i<=100; i++){

      console.log(FizzBuzzCalc(i));

  }

}


FizzBuzzDisplay();

module.exports = FizzBuzzDisplay;

