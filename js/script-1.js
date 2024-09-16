// module-1 part 2
"use strict"
// let cost = 0;
// const subscription = "pro"

// if (subscription === "pro") {
//     cost = 100;
// }

// console.log(cost);

////////////////////////////////////////////////



// let cost;
// const description = "free";

// if (description === "pro") {
//     cost = 100;
// } else {
//     cost = 0;
// }

// console.log(cost);

//////////////////////////////////////////////////


// let cost;
// const description = "premium";

// if (description === "free") {
//     cost = 0;
// } else if(description === "pro") {
//     cost = 100;
// } else if (description === "premium") {
//     cost = 500;
// } else {
//     console.log("Invalid description type");
// }

// console.log(cost);

///////////////////////////////////////////////////////

// let type;
// const age = 20;

// if (age >= 18) {
//     type = "adult";
// } else {
//     type = "child";
// }
// console.log(type);

////////////////////
// const age = 20;
// const type = age >= 18 ? "adult" : "child"
// console.log(type);
/////////////////////////////////


// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//     biggerNumber = num1
// } else {
//     biggerNumber = num2
// }
// console.log(biggerNumber);
///////////////////
// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 >= num2 ? num1 : num2;
// console.log(biggerNumber);
///////////////////////////////////////////


// let cost;
// const subscription = "premium";

// switch (subscription) {
//     case "free":
//         cost = 0;
//         break;
//     case "pro":
//         cost = 100;
//         break;
//     case "premium":
//         cost = 500;
//         break;

//     default:
//         console.log("Invalid subscriprion type");
        
// }
// console.log(cost);
///////////////////////////////////////////////////////////////////
// const value = 5;

// if (true) {
//     console.log("block score", value);
// }
// console.log("global score", value);
///////////////////

// if (true) {
//     const value = 5;
//     console.log("block value", value);
// }

// console.log("global value", value);
/////////////////////////////////////////////////////////////////////
// let counter = 0;

// while (counter < 10) {
//     console.log("counter", counter);
//     counter += 1;
// }
//////////////////////

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
    
// }
///////////////////////////////////////////////////
// let password = "";

// do {
//     password = prompt("введіть пароль довший 4-х символів")
// } while (password.length < 5);
// console.log("Ввели пароль: ", password);
////////////////////////////////////////////////
// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
// }
//////////////////////////////////////////
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i ++) {
//     sum += 1;
// }
// console.log(sum);

///////////////////////////////////////////


// const max = 10;
// for (let i = 0; i < max; i++) {
//     console.log(`${max} % ${i}`, max % i);
    
// }
/////////////////////////////////////////////////////////////
// for (let i = 0; i <= 5; i++) {
//     console.log(i);

//     if (i === 3) {
//         console.log("Find 3 and break function");
//         break;
//     }
// }
// console.log("Log after cicle");
///////////////////////////////////////////////////////////////
const number = 10;

for (let i = 0; i < number; i += 1) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("Непарні і: ", i);
    
}
