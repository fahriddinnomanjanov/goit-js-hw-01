'user strict';

let price;
const userChoise = prompt('Введите страну');
const userChoiseLow = userChoise.toLowerCase();

switch(userChoiseLow){
    case "китай":
    price = 100;
    alert(`Доставка в ${userChoise} будет стоить ${price} кредитов`);
    break;
    case "чили":
    price = 250;
    alert(`Доставка в ${userChoise} будет стоить ${price} кредитов`);
    break;
    case "австралия":
    price = 170;
    alert(`Доставка в ${userChoise} будет стоить ${price} кредитов`);
    break;
    case "индия":
    price = 80;
    alert(`Доставка в ${userChoise} будет стоить ${price} кредитов`);
    break;
    case "ямайка":
    price = 120;
    alert(`Доставка в ${userChoise} будет стоить ${price} кредитов`);
    break;
    default:
        alert('В вашей стране доставка не доступна');
}
