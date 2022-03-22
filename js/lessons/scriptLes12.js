"use strict";
//const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg:'red'
    },
    makeTest: function () { //создание своего метода
        console.log('Test');
    }
};

options.makeTest();

const { border, bg } = options.colors;//деструктуризация
console.log(border);

console.log(options.name);

delete options.name;//удаление свойства из обьекта

console.log(Object.keys(options).length);//получения масива со всема ключами, .length- количество ключей

console.log(options);
//console.log(options['colors']["border"]);
let counter=0;
for (let key in options) { //for in 
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свйство ${i}, имеет значение ${options[key][i]}`);
            counter++;
        }
    } else { 
        console.log(`Свйство ${key}, имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

