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

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ти вже подивився?', '');
    
        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ти вже подивився?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Мало");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Нормально так дивишся");
        } else if (personalMovieDB.count >= 30) {
            console.log("Ви кіноман!");
        } else {
            console.log("Помилка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
    
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введіть улюблені жанри через кому`).toLowerCase();
            
            if(genres === "" || genres === null) {
                console.log("Ви ввели якусь фігню");
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        });
    }
};