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

const numberOfFilms = +prompt('Скільки фільмів ти вже подивився?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log("Мало");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Нормально так дивишся");
} else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман!");
} else {
    console.log("Помилка");
}

console.log(personalMovieDB);