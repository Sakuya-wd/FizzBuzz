
const FizzBuzzCalc = require('../src/FizzBuzzCalc.js');


describe('FizzBuzzCalc', () =>{

    test('FizzBuzzCalc', ()=>{
       
        //例外処理が網羅されているかを確認。
        expect(() => FizzBuzzCalc('test')).toThrow();
        expect(() => FizzBuzzCalc(-1)).toThrow();
        expect(() => FizzBuzzCalc(101)).toThrow();

        //例外処理以外の仕様が網羅されているかを確認。
        expect(FizzBuzzCalc(15)).toBe('FizzBuzz');
        expect(FizzBuzzCalc(3)).toBe('Fizz');
        expect(FizzBuzzCalc(5)).toBe('Buzz');
        expect(FizzBuzzCalc(1)).toBe(1);

    })

})
