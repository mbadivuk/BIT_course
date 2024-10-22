//task1
// function arrayStringIntoNumber(inputArray) {
//     var newArray = [];
//     for (var i = 0; i < inputArray.length; i++) {
//         if (typeof inputArray[i] == "string") {
//             newArray[newArray.length] = parseFloat(inputArray[i]);
//         }
//     }
//     return newArray;
// }
// console.log(arrayStringIntoNumber(["1", "21", undefined, "42", "1e+3", Infinity]));

//task2
// function joinElements(inputArray) {
//     var newString = '';
//     for (var i = 0; i < inputArray.length; i++) {
//         if (inputArray[i] == undefined || inputArray[i] == null || isNaN(inputArray[i]) || inputArray[i] == Infinity) {
//             continue;
//         } else {
//             newString += inputArray[i];
//         }
//     } return newString;
// }
// console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//task3
// function filterFalsy(inputArray) {
//     var newArray = [];
//     for (var i = 0; i < inputArray.length; i++) {
//         if (!!inputArray[i]) {
//             newArray[newArray.length] = inputArray[i];
//         }
//     }
//     return newArray;
// }
// console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//task4
// function counterOfInteger(inputArray) {
//     var counter = 0;
//     for (var i = 0; i < inputArray.length; i++) {
//         if (Number.isInteger(inputArray[i])) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(counterOfInteger([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

//task5
// function counterOfFloats(inputArray) {
//     var counter = 0;
//     for (var i = 0; i < inputArray.length; i++) {
//         if (Number(inputArray[i]) && !Number.isInteger(inputArray[i])) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(counterOfFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));
