"use strict"


// Змінні, оголошені як const, обов'язково повинні бути ініціалізовані
// значенням під час оголошення, інакше виникне помилка.
const yearsOfBirth = 1994;
console.log(yearsOfBirth); //1994


// Якщо зміна оголошена як const, перезаписати її значення не можна.
// При спробі присвоїти нове значення, виникне помилка виконання скрипту.

// yearsOfBirth = 2020;                     // ❌ Неправильно, виникне помилка



// let age;
// console.log(age);

// age = 22
// console.log(age);

///////////////////////////////////////////////////

const COLOR_TEAL = "#009688";

//////////////////////////////////////////////////
// let username = "sr";
// console.log(typeof username);

// let inputValue = null;
// console.log(typeof inputValue);

// const quantity = 17;
// console.log(typeof quantity);

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen);

/////////////////////////////////////////////////

const username = "Grypis";
// console.log("Hello", username);
// alert(username)

//////////////////////////////////////////////////
// const isComming = confirm("Are you gay");
// console.log(isComming);

// const yourName = prompt("Please input your name");
// console.log(yourName);


///////////////////////////////////////////////////
const x = 10;
const y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

////////////////////////////////
let value = 7;

value += 3;
console.log(value);

//////////////////////////////////
const a = 5;
const b = 7;
const c = 10;
console.log(a > b); //false
console.log(a < b); //true
console.log(a >= b); //false
console.log(a <= b); //true
console.log(a == c); //false
console.log(a != c); //true
console.log(a === c); //false
console.log(a !== c); //true
//////////////////////////////////
const valueA = 10;
console.log(Number(valueA));
console.log(typeof Number(valueA));

const valueB = "random arandom";
console.log(Number(valueB));
console.log(typeof Number(valueB));
//////////////////////////////////
console.log(Number.parseInt("5px"));
console.log(Number.parseInt("asda1213"));
console.log(Number.parseInt("3122.22"));
console.log(Number.parseInt("45ea23"));
///////////
console.log(Number.parseFloat("12.33.22"));
console.log(Number.parseFloat("d12.2"));
console.log(Number.parseFloat("14.4asd"));
///////////////////////////////////////////////
const validNumber = Number("22")
console.log(Number.isNaN(validNumber));
///////////////////////////////////////////////
console.log(0.1 + 0.2 === 0.3);
console.log((0.1 * 100 + 0.2 * 100) / 100);
console.log((0.1 + 0.2).toFixed(2));
//////////////////////////////////////////////
console.log(Math.floor(31.12));
console.log(Math.ceil(2.312));
console.log(Math.round(2.3));
console.log(Math.round(35.5));
console.log(Math.max(2, 23, 4, 5, 52, 34));
console.log(Math.min(5, 3, 1, 0));
console.log(Math.pow(2, 3));
console.log(Math.random().toFixed(2));
console.log(Math.random() * (10 - 1) + 1);
////////////////////////////////////////////////
const message = "hello " + "sad" + " people";
console.log(message);
////////////////////
const guestName = "Grypis";
const roomNumber = 321;
// const greeting = "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting);
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting);
///////////////////////////////////
const mes = "Welcome to smalltown"
console.log(mes.length);
console.log("sleep, train and repeat".length);
////////////////////////////////
const massea = "Stop sleeping and go to play";
console.log(massea.toUpperCase());
console.log(massea.toLowerCase());
console.log(massea);
////////////////////////////////
const BRAND_NAME = "SAMSUNG";
const userInput = "sAmSuNG";
const normalazidToUpperCase = userInput.toUpperCase();
console.log(userInput);
console.log(userInput === BRAND_NAME);
console.log(normalazidToUpperCase);
console.log(normalazidToUpperCase === BRAND_NAME);
//////////////////////////////////
const texta = "Airline is good";
console.log(texta.indexOf("is"));
console.log(texta.indexOf("try"));
/////////////////////////////////
const someas = "Crion is cold"
console.log(someas.includes("s"));
console.log(someas.includes("z"));
/////////////////////////////////
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js"));
console.log(jsFileName.endsWith(".html"));
///////////////////////////////////
const cssFileName = "style.css"
const minFieldCSSFileName = cssFileName.replace(".css", ".min.css");
console.log(minFieldCSSFileName);
//////
const htmlFileName = "style.css, header.css, footer.css"
const maxFieldHtmlName = htmlFileName.replaceAll(".css", ".max.css" )
console.log(maxFieldHtmlName);
//////////////////////////////
const exp = "Command not found"
console.log(exp.slice(0, 7));
console.log(exp.slice(4, 10));
console.log(exp.slice(0, exp.length));
console.log(exp.slice(5, exp.length));
///////////////////////////////
const age = 50;
console.log(age > 100 && age < 30);

const gage = 20;
console.log(gage < 10 || 30 > gage);




















