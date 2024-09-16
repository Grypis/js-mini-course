// Tasks
'use strict'



// Task-1
// Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення: назва - рядок "Droid"; ціна за штуку - число 2000.

// const productName = "Droid";
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);



// Task-2
// Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// let productName = "Droid";
// console.log(productName);
// let pricePerItem = 2000;
// console.log(pricePerItem);

// productName = "Repair droid";
// console.log(productName);
// pricePerItem = 3500;
// console.log(pricePerItem);



// Task-3
// Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

// topSpeed - число 160.
// distance - число 617.54.
// login - рядок "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// const topSpeed = 160;
// console.log(topSpeed);
// const distance = 617.54;
// console.log(distance);
// const login = "mango935";
// console.log(login);
// const isOnline = true;
// console.log(isOnline);
// const isAdmin = false;
// console.log(isAdmin);



// Task-4
// Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);




// Task-5
// Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits". Де <назва товару> і <ціна товару> — це значення змінних productName і pricePerItem. Використовуй синтаксис шаблонних рядків.

// const productName = "Droid";
// const pricePerItem = 3500;

// Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// console.log(message);



// Task-6
// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."


// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);



// Task-7
// Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// sayHi()



// Task-8
// Функція add повинна вміти додавати три числа і виводити результат у консоль. Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.

// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equal ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);



// Task-9
// Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.

// function add(a, b, c) {
//     return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));



// Task-10
// Функція makeMessage(name, price) складає і повертає повідомлення про покупку. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.

// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits` ;
//   return message;
// };
// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);



// Task-11
// Функція calculateTotalPrice рахує та повертає загальну суму покупки на основі кількості товарів у замовленні та ціни за одиницю товару. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару у замовленні
// pricePerItem - ціна за одиницю товару
// Доповни код функції так, щоб загальна сума покупки була присвоєна змінній totalPrice. Загальна сума покупки отримується шляхом множення кількості замовлених товарів на ціну одиниці.


// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// };

// calculateTotalPrice(5, 100) повертає 500
// calculateTotalPrice(8, 60) повертає 480
// calculateTotalPrice(3, 400) повертає 1200
// calculateTotalPrice(1, 3500) повертає 3500
// calculateTotalPrice(12, 70) повертає 840



// Task-12
// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
//     console.log(message);
//   return message;
// }

// makeOrderMessage(2, 100, 50)
// Виклик makeOrderMessage(2, 100, 50) повертає "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Виклик makeOrderMessage(4, 300, 100) повертає "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Виклик makeOrderMessage(10, 70, 200) повертає "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."



// Task-13
// Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. Присвой змінній passed вираз перевірки віку користувача на повноліття. Людина вважається повнолітньою у віці 18 років і старше.

// function isAdult(age) {
//   const passed = age >= 18;
//     console.log(passed);
//   return passed;
// }
// isAdult(20)

// У виразі перевірки використовується оператор >=
// Виклик isAdult(20) повертає true
// Виклик isAdult(14) повертає false
// Виклик isAdult(8) повертає false
// Виклик isAdult(37) повертає true


// Task-14
// Функція isValidPassword (password) перевіряє рівність збереженого і введеного паролів і повертає результат перевірки - буль true або false. Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. Введений пароль передається у параметр password.

// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === "jqueryismyjam";
//     console.log(isMatch);

//   return isMatch;
// }
// isValidPassword("mangodab3st")

// У виразі перевірки паролів використаний оператор ===
// Виклик isValidPassword("mangodab3st") повертає false
// Виклик isValidPassword("kiwirul3z") повертає false
// Виклик isValidPassword("jqueryismyjam") повертає true



// Task-15
// Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.
// Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   console.log(message);
  
//   return message;
// }
// checkAge(20)

// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"



// Task-16
// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:
// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".

// function checkStorage(available, ordered) {
//   let message;
//     if (available >= ordered) {
//         message = "Order is processed, our manager will contact you."
//     } else {
//         message = "Not enough goods in stock!"
//     }
//     console.log(message);
//   return message;
// }
// checkStorage(100, 50)

// Виклик checkStorage(100, 50) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(200, 150) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"


// Task-17
// Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням.

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a, b, c, d);



// Значення змінної a дорівнює 7
// Використаний оператор +=
// Значення змінної b дорівнює 6
// Використаний оператор -=
// Значення змінної c дорівнює 45
// Використаний оператор *=
// Значення змінної d дорівнює 2
// Використаний оператор /=


// Task-18
// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

// Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// pricePerDroid - ціна одного дроїда
// orderedQuantity - кіл-сть замовлених дроїдів
// customerCredits - сума коштів на рахунку клієнта
// Доповни її наступним функціоналом:

// Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//     const totalPrice = pricePerDroid * orderedQuantity;
//     console.log(totalPrice);
//     if (totalPrice <= customerCredits) {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//     } else {
//         message = `Insufficient funds!`
//     }
//     console.log(message);
//   return message;
// }
// makeTransaction(3000, 5, 23000)
// Виклик makeTransaction(3000, 5, 23000) повертає "You ordered 5 droids, you have 8000 credits left"
// Виклик makeTransaction(1000, 3, 15000) повертає "You ordered 3 droids, you have 12000 credits left"
// Виклик makeTransaction(5000, 10, 8000) повертає "Insufficient funds!"
// Виклик makeTransaction(2000, 8, 10000) повертає "Insufficient funds!"
// Виклик makeTransaction(500, 10, 5000) повертає "You ordered 10 droids, you have 0 credits left"


// Task-19