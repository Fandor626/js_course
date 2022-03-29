let x = 5;
//alert(x++);//особенность постфиксного инкремента, получим 5

[] + false - null + true;
console.log(typeof ([] + false));//string, false

console.log([] + false - null + true);//NAN

let y = 1;
let x1 = y = 2;
//alert(x1);//получим 2

console.log([] + 1 + 2); //12 - string
//alert("-01"[0]);//обращение к элементу строки

console.log(2 && 1 && null && 0 && undefined);// оператор && запинается на лжи(null)
// ||запинается на правде

console.log(!!(1 && 2) == (1 && 2));//два !! превращают в boolean значение

//alert(null || 1 && 2 || 3);// будет 2

const a = [1, 2, 3];
const b = [1, 2, 3]; //два массива не равны друг другу, у них лишь одинаковые элементы\

alert(+"Infinity");

console.log("Ёжик" > "яблоко");//false

console.log(0 || "" || 2 || undefined || true || false);//2