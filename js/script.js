"use strict"


// Змінні, оголошені як const, обов'язково повинні бути ініціалізовані
// значенням під час оголошення, інакше виникне помилка.
const yearsOfBirth = 1994;
console.log(yearsOfBirth); //1994


// Якщо зміна оголошена як const, перезаписати її значення не можна.
// При спробі присвоїти нове значення, виникне помилка виконання скрипту.

// yearsOfBirth = 2020;                     // ❌ Неправильно, виникне помилка



let age;
console.log(age);

age = 22
console.log(age);

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

const yourName = prompt("Please input your name");
console.log(yourName);
