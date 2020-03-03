"user strict";

let price;
const userChoise = prompt("введите вашу страну");
const userChoiseLow = userChoise.toLowerCase();

switch (userChoiseLow) {
  case "Китай":
    price = 100;
    alert(`Доставка в ${userChoise} будет стоить ${price} кредитов`);
    break;
  case "Чили":
    price = 250;
    alert(`Доставка в ${userChoise} будет стоить ${price} кредитов`);
    break;
  case "Австралия":
    price = 170;
    alert(`Доставка в ${userChoise} будет стоить ${price} кредитов`);
    break;
  case "Индия":
    price = 80;
    alert(`Доставка в ${userChoise} будет стоить ${price} кредитов`);
    break;
  case "Ямайка":
    price = 120;
    alert(`Доставка в ${userChoise} будет стоить ${price} кредитов`);
    break;
  default:
    alert("В вашей стране доставка не доступна");
    console.log("В вашей стране доставка не доступна");
}
