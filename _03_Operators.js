//Arithmetic Operators

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Increment (++)
console.log(++x); //once 1 ekler sonra konsolda yazr
console.log(x++); //once konsolda yazar sonra 1 ekler
console.log(x);

//Decrement(--)
console.log(--y); //once 1 ekler sonra konsolda yazr
console.log(y--); //once konsolda yazar sonra 1 ekler
console.log(y);

//Assigment Operators
let z = 10;

z = z + 5;
z += 5;

z = z * 3;
z *= 3;

//Comparison Operators
let a = 1;

  //Relational Operators
console.log(x > 0); // boolean
console.log(x >= 1); // boolean
console.log(x < 0); // boolean
console.log(x <= 0); // boolean

  //Equality
console.log(a === 1); //a 1 e esit mi
console.log(a !== 1);
// ---------------

// Strict Equality (type + value)
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality (Value)
console.log(1 == 1);
console.log('1' == 1); //Stringi cevirip numbera bakar
console.log(true == 1);



// TERNARY OPERATOR

let points = 120;
let type = points > 100 ? 'Gold' : 'Silver';

console.log(type);


//Logical AND (&&)

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);


//Logical OR (||)

highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan);


// NOT Operator (!)

let applicationRefused = !eligibleForLoan;

console.log(applicationRefused);



// Falsy(False)
//undefined
// null
// 0
// false
// ''
// Nan

// Anything that is not Falsy ---> Truthy

console.log(false || 'Mosh');
console.log(false || 1);































