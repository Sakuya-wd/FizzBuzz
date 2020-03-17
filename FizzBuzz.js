/*
let calc = () =>{

  for(let i=1; i<=100; i++){

    if(i%3==0 && i%5==0){
      console.log(`FizzBuzz`);
    }
    else if(i%3==0){
      console.log(`Fizz`);
    }
    else if(i%5==0){
     console.log(`Buzz`);
    }
    else{
     console.log(`${i}`);
    }

   }

}

calc();
*/

  class FizzBuzz{

        constructor(su){
          this.su = su;
        }

        Calc(){
          if(this.su%3==0 && this.su%5==0){
           console.log(`FizzBuzz`);
          }
          else if(this.su%3==0){
           console.log(`Fizz`);
          }
          else if(this.su%5==0){
           console.log(`Buzz`);
          }
          else{
           console.log(this.su);
          }
        }
}

for(let i=1; i<=100; i++){
  let Fz = new FizzBuzz(i);

  Fz.Calc();
}
