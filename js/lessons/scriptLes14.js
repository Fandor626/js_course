"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b, a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;//тут мы не копируем обьект, а просто передаём значчение по ссылке

copy.a = 10;

console.log(copy);
console.log(obj);

function Copy(mainObj) { 
    let objCopy = {};
    
    let key;
    for (key in mainObj) { 
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = Copy(numbers);//создали копию поверхносную!!!

newNumbers.a = 10;
newNumbers.c.x = 10;//ссылочное обращение
console.log(newNumbers);//копия

console.log(numbers);//изначальная конструкция

const add = {
    d: 17,
    e: 20
};
console.log(Object.assign(numbers, add));//соединение двух обьектов, это так называемая поверхносная копия

const clone = Object.assign({}, add);//тут лежит поверхносная копия
clone.d = 20;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();//копирование масива!!!

newArray[1] = '12312we';
console.log(newArray);
console.log(oldArray);

const video = ['youtoube', 'vimeo', 'uatube'],
    blogs = ['wordpress', 'blogger', 'blogger111'],
    internet = [...video, ...blogs, 'facebook', 'instagram'];//вытаскиваем элементы с двух предыдущих масивов и заполняем его 
console.log(internet);

function log(a, b, c) { 
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);//

const array = ["a", "b"];
const newAarray = [...array];//

const q = {
    one: 1,
    two:2
};

const newObj = {...q};//