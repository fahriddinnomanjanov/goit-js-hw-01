// "use strict";

// let message = "This is a cat!";
// const search = "is";
// const replace = "(is)"


// // message(replace)

// const sIndx = message.indexOf(search);
// const newString =
//  message.substr(0, sIndx) + " " + replace + " " + message.substr(eIndx,10000);

// console.log(sIndx)
// // console.log(message )







let message = "The my name Artem is a cat!";
const search = "is";
const replace = "(is)";

const sIndx = message.indexOf(" " + search + " ");
const eIndx = sIndx + search.length + 2;

const string1 = message.substr(0, sIndx);//The my name Artur.
const string2 = replace;//(is)
const string3 = message.substr(eIndx);//a cat!

const newString = string1 + string2 + string3;

console.log(sIndx, eIndx, newString);

//19 21 "This my name is Artur. (is) a cat!"




























// let 
// let


// do{
//     const name = prompt("введите имя")
//     if(!name){
//         if (name === null)
//         alert("отменено пользователм")
//         break;
//     } else {

//     }
//     const age = Number(prompt("Возраст"));
//     if (!age) {
//         alert("fahriddin")
//     }
// }
// while(input !==null)


// const b = 6>8;

// const rez = b ? "G": "Y";
// console.log(rez);



































// 'use strict';


// const PASSWORD1 = 'fahriddin';
// const PASSWORD2 = 'robiyahon';

// const name1 = 'Anton';
// const name2= 'Artem';

// const userInput = prompt('Input password');
// let message;



// console.log('userInput');

// if(userInput === PASSWORD1)
// {
//     message = `привет ${name1}`;
// }

// else if(userInput === PASSWORD2)
// {
//     message = `привет ${name2}`;

// }

// else if(userInput === null)
// {
//     message = `отменено пользователем`;
// }

// else{
//     message = `Неправильный пароль`;
// }

// alert(message);


// 2 == "2"
// true

// 2 === 2
// false