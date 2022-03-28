"use strict";
//1)
console.log(typeof (String(null)));// в даном случае null превратился в строку

console.log(typeof (String(4)));//тоже самое но с числом
//2)
console.log(typeof (5 + ''));//string 

const num = 5;
console.log("https://vk.com/catalog/" + num);

console.log(`https://vk.com/catalog/${num}`);

const fontSize = 26 + 'px';//string

//To Number

//1)
console.log(typeof (Number('4')));

//2)

console.log(typeof (Number(+'5')));

//3)

console.log(typeof (parseInt('15px', 10)));
console.log(typeof (parseFloat('44')));

//let answer = +prompt("Hello","");

//To boolean

//0, null, '',, undefined, NaN - always false, other - true

//1)
let switcher = null;

if (switcher) {
    console.log("Answering");
}

switcher = 1;

if (switcher) {
    console.log("Answering...");
}

console.log(typeof (Boolean('4')));

console.log(typeof (!!"44444"));// the same

