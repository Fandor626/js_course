'use strict';

const box = document.getElementById('box');//доступ к элементу по id

console.log(box);

const buttons = document.getElementsByTagName('button')[1];//доступ ко всем элементам с тегом button
//получим коллекцию (псевдомассив).в квадратных скобках обращаемся ко второму элементу, конкретно второй кнопке
console.log(buttons[1]);//либо так

const circles = document.getElementsByClassName('circle');//Доступ по имени класса
console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

console.log(hearts);//получим коллекцию

const oneHeart = document.querySelector('.heart');//позволяет получить один элемент со страницы(первый)
console.log(oneHeart);