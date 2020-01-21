'use strict';

 const credits = 23580;
 const pricePerDroid  = 3000;
 let userChoise = prompt('сколько дроидов надо ?');
 userChoise=Number(userChoise);
 const totalPrice = pricePerDroid * userChoise;
 const balance = credits - totalPrice;

 if(userChoise === null){
     console.log('Отменено пользователем!');
 }
 else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');

 }
 else{
    console.log(`Вы купили ${userChoise} дроидов, на счету осталось ${balance} кредитов.`);

 }