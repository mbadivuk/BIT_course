//task1
// function insertString(inputString1, inputString2, position) {
//     var newString = '';
//     var array = [];
//     for (i = 0; i < inputString1.length; i++) {
//         var element = inputString1[i];
//         array[array.length] = element;
//     }
//     for (j = 0; j < array.length; j++) {
//         if (j === position) {
//             newString += inputString2;
//         }
//         newString += array[j];
//     }
//     return newString;
// }
// console.log(insertString("Marko", " Badivuk", 0));

//task2
// function joinElements(inputArray) {
//     var newString = '';
//     for (i = 0; i < inputArray.length; i++) {
//         var element = inputArray[i];
//         if (element == undefined || element == null || element !== element || element == Infinity) {

//         } else {
//             newString += element;
//         }
//     }
//     return newString;
// }
// console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//task3
// function filterFalsyFromArray(inputArray) {
//     var newArray = [];
//     for (i = 0; i < inputArray.length; i++) {
//         var element = inputArray[i];
//         if (element) {
//             newArray[newArray.length] = element;
//         }
//     }
//     return newArray;
// }
// console.log(filterFalsyFromArray([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//task4
// function reverseNumber(number) {
//     var numberString = number + "";
//     var reversedNumber = "";
//     for (i = numberString.length - 1; i >= 0; i--) {
//         var element = numberString[i];
//         reversedNumber += element;
//     }
//     return reversedNumber * 1;
// }
// console.log(reverseNumber(12345));

//task5
// function lastElementOfArray(array, n) {
//     var newArray = [];
//     // for (i = array.length - 1; i >= 0; i--) {
//     //     if (i = array.length - 1) {
//     //         return array[i];
//     //     }
//     // }
//     for (i = array.length - n; i < array.length; i++) {
//         newArray[newArray.length] = array[i];
//     }
//     return newArray;
// } console.log(lastElementOfArray([1, 2, 3, 4, 5], 3));

//task6
// function specifiedNumberOfElements(number, element = null) {
//     var newArray = [];
//     for (i = 0; i < number; i++) {
//         newArray[newArray.length] = element;
//     }
//     return newArray;
// }
// console.log(specifiedNumberOfElements(6, 0));

//task7
// function perfectNumber(number) {
//     var sum = 0;
//     for (var i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }
//     if (number === sum) {
//         return number + " is a perfect number";
//     }
// }
// console.log(perfectNumber(8128));

//task8
