//app. js Entry point

const sum = (a,b) =>{
  return a + b;
}

console.log(sum(14,9));

//Currency converter

let oneDollarIs = {
    "Yen": 140
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


let  oneYenIs = {
    "Pound": 0.06
}


// function fromEuroToDollar (euro){
//   return euro * oneEuroIs.USD;
// }
//12 Implementing the function 

//fromDollarToYen                  //140
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen  = valueInDollar * oneDollarIs.Yen; //linea 12
    //return the dollar value
    return valueInYen;
}

// we declare the function with the exact name "fromEuroToDollar"
                                    //3.5
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD; //linea 17
    //return the dollar value
    return valueInDollar;
}                                 //0.06
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen* oneYenIs.Pound; //linea 19
    return valueInPound;
}



module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen}