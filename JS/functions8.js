//task1
// (
//     function (array) {
//         var temp = array[0];
//         array[0] = array[array.length - 1];
//         array[array.length - 1] = temp;
//         console.log(array);
//     }
// )([4, 5, 11, 9]);

//task2
// (
//     function (a, b) {
//         console.log(a * b);
//     }
// )(4, 5);

//task3
// var a = (function (string, letter) {
//     var counter = 0;
//     var newString = string.toLowerCase();
//     var array = [];
//     var finalString = "";
//     for (var i = 0; i < newString.length; i++) {
//         array.push(newString[i]);
//     }
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === letter) {
//             array[i] = "*";
//             counter++;
//         }
//         finalString += array[i];
//     }
//     return [finalString, counter];
// }
// )("prograMming", "m");
// console.log(a)

//task4
// function email(name, surname) {
//     return function () {
//         return name + "." + surname + "@gmail.com";
//     }
// }
// console.log(email("marko", "badivuk")());

//task5
// function octalToDecimal(number) {
//     return function () {
//         return parseInt(number, 8);
//     }
// }
// console.log(octalToDecimal(34)());

//task6
// function password(string, callback1, callback2) {
//     var counter = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] *= 1) {
//             counter++;
//         }
//     }
//     if (string.length >= 6 && counter >= 1) {
//         return callback1();
//     }
//     return callback2();
// }
// console.log(password("JSGuru123", valid, invalid));

// function valid() {
//     return "Your password is cool!";
// }
// function invalid() {
//     return "Your password is invalid!";
// }

//task7
// function oddNumber(number) {
//     var result;
//     number % 2 !== 0 ? result = true : result = false;
//     return result;
// }

// function filterOddElements(array, callback) {
//     var newArray = [];
//     for (var i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }
// console.log(filterOddElements([2, 8, 11, 4, 9, 3], oddNumber));
