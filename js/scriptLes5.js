"use strict"

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +"5");//второй плюс - унарный


let incr = 10,
    decr = 10;

incr++;//инкремент постфиксный
decr--;//декремент постфиксный

console.log(incr, decr);

++incr;//инкремент префиксный
--decr;//декремент префиксный
console.log(incr, decr);

console.log(incr++);
console.log(decr--);

console.log(++incr);
console.log(--incr);
//шлавное отличие префиксного инкремента/декремента в том, что при использовании его сразу, мы в консоли получим
//предыдущее значение, а при постфиксном получим новое значение

console.log(5 % 2);//остача от деления

console.log(2 * 4 == '8');//сравнение
console.log(2 * 4 === '8');//строгое сравнение

const isChecked = true,
    isClose = false;
      
console.log(isChecked && isClose);//логический оператор "И"
console.log(isClose || isChecked);//логический оператор "ИЛИ"

