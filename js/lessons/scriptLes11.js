"use strict";

function first() { 
    //Do something
    setTimeout(function () { 
        console.log(1);
    }, 500);
}

function second() { 
    console.log(2);
}

first();
second();//Если функции идут одна за одной - это не значит, что они будуть выполнятся одна за другой

//callbac function
function learnJS(lang, callback) { 
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() { 
    console.log('Я прошёл этот урок');
}

learnJS('JavaScript', done);//в даном примере мы не вызываем функцию, а передаём её вторым аргументом.
// done передаётся как callback

