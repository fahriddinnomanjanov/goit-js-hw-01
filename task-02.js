"use strict";

const total = 100;
const ordered = 150;
let message;

if (total > ordered) message="На складе недостаточно товаров!";
else {
 message="Заказ оформлен, с вами свяжется менеджер";
}

alert(message);
console.log(message);
