"use strict";

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Ти пацюк?", "");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Ти шо тут забув?', '');
// answers[1] = prompt('Ти нашо тут?', '');
// answers[2] = prompt('Підеш звідси?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ти вже подивився?', '');

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ти вже подивився?', '');
    }
} 

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один з останніх побачених фільмів?', ''),
              b = prompt('На скільки його оціниш?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Good");
        } else {
            console.log("Йди гуляй");
            i--;
        }
    
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Мало");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Нормально так дивишся");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ви кіноман!");
    } else {
        console.log("Помилка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);

    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();