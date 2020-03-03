"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let userChoise = prompt("сколько дроидов надо ?");


const totalPrice = pricePerDroid * Number(userChoise);
const balance = credits - totalPrice;

if (userChoise === null) {
  alert("Отменено пользователем!");
  userChoise = Number(userChoise);
} else if (credits < totalPrice) {
  alert("Недостаточно средств на счету!");
} else {
  alert(`Вы купили ${userChoise}, дроидов, на счету осталось ${balance}, кредитов.`);
}
