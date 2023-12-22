'use strict';
//1. Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
let userName = prompt('What is your name?');
let lastName = prompt('What is your last name?');
let userAge = prompt('How old are you?');

console.log(userAge + ' ' + lastName + ' ' + userName);


/*2.Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
Зробила вивід на консоль та через алерт в вихідному порядку.*/
const myNumber = '12345';
console.log(myNumber[0], myNumber[1], myNumber[2], myNumber[3], myNumber[4]); // <-- Для виводу в консолі.

alert(myNumber[0] + ' ' + myNumber[1] + ' ' + myNumber[2] + ' ' + myNumber[3] + ' ' + myNumber[4]); // <-- Для виводу в алерті.
