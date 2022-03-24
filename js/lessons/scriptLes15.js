"use strict";

let str = "some";//строка, примитивный тип даных
let strObj = new String(str);//оборачиваем строку в обьект

console.log(typeof (str));
console.log(typeof (strObj));

console.dir([1, 2, 3]);

const soldier = {//прототип
    health: 400,
    armor: 100,
    sayHello: function () { 
        console.log("hello");
    }
};

const john1 = Object.create(soldier);

/*const john = {
    health: 100
};*/

//john.__proto__ = soldier;//устаревшая запись

//Object.setPrototypeOf(john, soldier);// идентично тому что на 25 строке

//console.log(john.armor);
john1.sayHello();

