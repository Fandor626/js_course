"use strict";

if (4==9) { 
    console.log('Ok!');
} else{ 
    console.log('Error');
}

const num = 50;

if (num < 49) { //вложенность условий
    console.log('Error');
} else if (num > 100) {
    console.log('Too many');
} else { 
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); // тернарный оператор(единственный в js на даный момент) сначала
//проверяем условие, потом если оно верно, то выводим Ок!, если же нет, то Error

const number = 50;

switch (number) { //аналог if, но тут задействовано только строгое сравнение, со строками можно работать точно так же!!!
    case 49:
        console.log('false');
        break;
    case 100:
        console.log('false');
        break;
    case 50:
        console.log('true');
        break;
    default:
        console.log('not this time');
        break;
}
