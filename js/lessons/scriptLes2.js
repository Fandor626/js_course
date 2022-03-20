"use strict"

//Типы Даных:
//          ПРОСТЫЕ:
//               1   ЧИСЛА :1,2,3
//               2   СТРОКИ: 'string', 'name'
//               3   ЛОГИЧЕСКИЙ ТИП (boolean): true/false
//               4   null - когда чего то просто не сущевствует
//               5   undefined - когда что то сущевствует, но значения у него нету(стоит холодильник, но он пустой)
//               6   Symbol
//               7   BigInt
//          ОБЪЕКТЫ(спец. объекты)
//               8   Массивы []
//               9   функции function
//              10   Объект Даты
//              11   Регулярные выражения
//              12   Ошибки

let number = 4.6; // 1

console.log(-4 / 0); //главная особенность
console.log('string' * 9);//особенности поведения

const persone1 = "Alex"; //первый тип создания строки
const persone2 = 'Nick'; //второй тип создания строки
const Persone3 = `Tony`; //третий тип создания строки

const bool = true;

//console.log(something); //null в явном виде очень тяжело получить

let und;
console.log(und); //получение undefined


const obj = {
    name: "John",
    age: 25,
    isMaried: false
};

console.log(obj.name);//способ достукаться до определенного значения в объекте
console.log(obj["name"]);//ещё один способ, но лучше точкой
console.log(obj["isMaried"]);
console.log(obj);


let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];//массив - вид объекта, в котором 
//изначально задан ключ( номер по порядку) и в котором мы задаём только значения
console.log(arr[1]);//не забываем о нумерации с нуля!!!

