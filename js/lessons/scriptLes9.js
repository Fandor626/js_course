"use strict";

//Function Declaration
//функции даного типа существуют ещё до того, как код запустится
//в таком случае мы можем использовать функцию до её обьявления

let num = 20;                     //глобальная переменная, мы можем менять её в функциях
function showFirstMessage(text) { 
    console.log(text);
    num = 10;        //за пределами функции переменные let i const недоступна!!! они называються локалльными
    console.log(num);//вывод локальной переменной. сначала ищеться локальнай переменная, если же её нету,
                     //то ищется глобальная!!!
}

showFirstMessage('Hello World!');
console.log(num);    //вывод глобальной переменной

function calc(a, b) { 
    return (a + b);
    //console.log('dfdf');//этот код никогда не выполниться
}

console.log(calc(2, 3));
console.log(calc(2, 2));
console.log(calc(3, 3));

function ret() {
    let num = 50;
    return num;
}   

const anotherNum = ret();
console.log(anotherNum);

//function expression
//Даный тип функций создается только тогда, когда доходит поток кода,
// вызвать можно только после обьявления
const logger = function () { 
    console.log('Hello');
};

logger();

//Стрелочные функции
//не имеет своего контекста вызова

const culc1 = (a, b) => {
    console.log('1');
    return a + b;
};