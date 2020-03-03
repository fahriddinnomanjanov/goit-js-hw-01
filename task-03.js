"use strict";

const ADMIN_PASSWORD = "fahriddin";
const password = prompt("пароль");

if (password == null) {
  alert("Отменено пользователем!");
} else if (password == ADMIN_PASSWORD) {
   alert("Добро пожаловать!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}

