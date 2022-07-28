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

const numberOfFilms = prompt('Скільки фільмів ти вже подивився?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх побачених фільмів?', ''),
      b = prompt('На скільки його оціниш?', ''),
      c = prompt('Один з останніх побачених фільмів?', ''),
      d = prompt('На скільки його оціниш?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);