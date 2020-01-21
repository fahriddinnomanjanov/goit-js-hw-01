'use strict';


const ADMIN_PASSWORD = "Fahriddin";
let message;
let password = prompt('пароль')

// console.log('userInput')

if(password == null)
{
    message='Отменено пользователем!'
}
else if (password == ADMIN_PASSWORD )
{
    message="Добро пожаловать!"
}
else {
    message = "Доступ запрещен, неверный пароль!"
}
alert(message)