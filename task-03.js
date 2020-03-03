"use strict";

const ADMIN_PASSWORD = "fahriddin";
let message;
const password = prompt("пароль");

if (password == null) {
  message = "Отменено пользователем!";
} else if (password == ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
console.log(message);
