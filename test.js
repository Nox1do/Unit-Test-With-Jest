// importar la funcion sum del archivo app.js
const {sum} = require('./app.js');

//first test
test('adds 14 + 9 to equal 23', ()=> {
    //llamar funcion sum
    let total = sum(14,9);

    //resultado esperado = 23;
    expect(total).toBe(23);
});

//fromEuroToDollar 
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.2 dollars, 
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

//From Dollar to Yen
test("1 dollar should be 140.21 Yens", function(){
    //import the function from app.js
    const {fromDollarToYen} = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(200)

    // if 1 Dollar equals to 140 yens
    const expected = 20 * 140; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(20)).toBe(2800);
    });

    //From Yen to Pound
test("1 Yen should be 0.06 Pounds", function(){
    //import the function from app.js
    const {fromYenToPound} = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromYenToPound(200)

    // if 1 yen equals to 0.06 Pounds
    const expected =  200* 0.06; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(200)).toBe(12);
    });