"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let userChoise = prompt("сколько дроидов надо ?");
let message;

const totalPrice = pricePerDroid * Number(userChoise);
const balance = credits - totalPrice;

if (userChoise === null) {
  message="Отменено пользователем!";
  userChoise = Number(userChoise);
} else if (credits < totalPrice) {
  message="Недостаточно средств на счету!";
} else {
  message=`Вы купили ${userChoise}, дроидов, на счету осталось ${balance}, кредитов.`;
}

alert(message);
console.log(message);