"use strict";

// if(4 == 9) {
//     console.log('OK!');
// } else{
//     console.log("Дурачок?");
// }

// const num = 50;
// if(num < 49) {
//     console.log("Мало");
// } else if(num > 100) {
//     console.log("банато");
// } else {
//     console.log("Все заїбумба");
// }

// (num === 50) ? console.log("Все заїбумба") : console.log("Дурачок?");

// const num = 51;

// switch (num) {
//     case 49:
//         console.log("Дурачок?");
//         break;
//     case 100:
//         console.log("Дурачок?");
//         break;
//     case 50:
//         console.log("Все заїбумба");
//         break;
//     default:
//         console.log("Ладно, гуляй");
//         break;
// }

// const hamburger = true;
// const cola = true;
// if(hamburger && cola) {
//     console.log("Наївся!");
// }

// console.log((hamburger && cola));

// // console.log(0 && 5); -Вертає значення false

// const hamburger = 3;
// const cola = 0;
// if(hamburger || cola) {
//     console.log("Наївся!");
// }

// && - Запинається на false
// || - Запинається на true

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }

    
//     console.log(i);
    
// }

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {


    for (let j = 0; j < i; j++) {
        result += "*";
    }
    
    result += '\n';
}

console.log(result);