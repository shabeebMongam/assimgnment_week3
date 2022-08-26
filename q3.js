let p = prompt("Enter principal amount");
let r = prompt("Enter Interest rate");
let n = prompt("Enter Number of years");

let intP = parseInt(p);
let floatR = parseFloat(r);
let floatN = parseFloat(n);

let simpleInterest = ((intP*floatR*floatN)/100);

console.log( `Your simple interest is ${simpleInterest}`  );
