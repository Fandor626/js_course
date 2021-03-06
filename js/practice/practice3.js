"use strict";
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
    let personalMovieDB.count;

function start() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
    while (personalMovieDB.count =='' || personalMovieDB.count==null || isNaN(personalMovieDB.count)) { 
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}
start();

const personalMovieDB = {
    count: personalMovieDB.count,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

function rememberMyFilms() { 
    for (let i = 0; i < 2;i++) { 
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() { 
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else { 
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyBD(hidden) { 
    if (!hidden) { 
        console.log(personalMovieDB);
    }
}

showMyBD(personalMovieDB.privat);

function writeYourGenres() { 
    for (let i = 1; i <= 3; i++) { 
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();