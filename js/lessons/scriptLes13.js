"use strict";

const arr = [1, 21, 3, 6, 8];
arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
 }

arr[99] = 0;//так делать нельзя!!! 

console.log(arr.length);//даное свойство состоит из последнего индекса в масиве + 1

arr.pop();//удаляет последний элемент массива
console.log(arr);

arr.push(12);//добавить элемент в конец массива

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {//тоже самое чти и цикл for выше
    console.log(value);
}

arr.forEach(function (item, i, arr) {//элемент, который перебираем в даный момент номер по порядку,
//ссылка на массив, который перебираем. даный цикл нельзя остановить!
    console.log(`${i}:${item} внутри массива ${arr}`);
});

//const str = prompt("", "");
//const products = str.split(',' || ', ');//полцчили массив
//products.sort();//сортирует массив как строки
//console.log(products.join(';'));//склеили массив

