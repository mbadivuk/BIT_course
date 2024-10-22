//task1
// function checkIfString(string) {
//     return (typeof string == 'string') ? true : false;
// } console.log(checkIfString(12));

//task2
// function checkIfBlankString(string) {
//     if (typeof string == 'string' && string.length !== 0) {
//         return true;
//     }
//     return false;
// } console.log(checkIfBlankString(false));

//task3
// function concatenateString(string, number) {
//     var result = '';
//     if (typeof string == 'string' && typeof number == 'number') {
//         for (i = 0; i < number; i++) {
//             result += string;
//         }
//     }
//     return result;
// }
// console.log(concatenateString('Ha', 3));

//task4
// function countNumOfLetters(string, letter) {
//     var counter = 0;
//     for (var i = 0; i < string.length; i++) {
//         var element = string[i];
//         if (element === letter) {
//             counter++;
//         }
//     }
//     return counter;
// } console.log(countNumOfLetters('My random string', 'n'));

//task5
// function firstOccurence(string, character) {
//     for (var i = 0; i < string.length; i++) {
//         var element = string[i];
//         if (element === character) {
//             return i + 1;
//         }
//     } return '-1';
// } console.log(firstOccurence("Bradaaaasa", "g"));

//task6
// function lastOccurence(string, character) {
//     for (var i = string.length - 1; i >= 0; i--) {
//         var element = string[i];
//         if (element === character) {
//             return i + 1;
//         }
//     } return '-1';
// } console.log(lastOccurence('Bada', 'a'));

//task7
// function stringIntoArray(string) {
//     var newArray = [];
//     for (var i = 0; i < string.length; i++) {
//         var element = string[i];
//         if (element === " ") {
//             element = null;
//         }
//         newArray[newArray.length] = element;
//     }
//     return newArray;
// } console.log(stringIntoArray('My random string'));

//task8
// function prime(number) {
//     if (typeof number == 'number' && number > 1) {
//         for (i = 2; i < number; i++) {
//             if (number % i == 0) {
//                 return false;
//             }
//             return true;
//         }
//     }
// } console.log(prime(29));

//task9
// function replaceSpace(separator, string) {
//     var newString = '';
//     for (var i = 0; i < string.length; i++) {
//         var element = string[i];
//         if (element === " " && typeof separator == "string") {
//             element = separator;
//         } else if (element === " ") {
//             element = '-';
//         }
//         newString += element;
//     }
//     return newString;
// }
// console.log(replaceSpace('+', 'My random string'));

//task10
// function getCharacters(string, number) {
//     var array = [];
//     var newString = '';
//     for (var i = 0; i < string.length; i++) {
//         var element = string[i];
//         array[array.length] = element;
//     }
//     for (j = 0; j < number; j++) {
//         var value = array[j];
//         newString += value;
//     }
//     return newString + '...';
// } console.log(getCharacters('Badivuk', 5));

//task11
// function arrayStringToNumber(array) {
//     var newArray = [];
//     var value;
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
//         if (typeof element == 'string') {
//             value = +element;
//             newArray[newArray.length] = value;
//         }
//     }
//     return newArray;
// } console.log(arrayStringToNumber(["1", "21", undefined, "42", "1e+3", Infinity]));

//task12
// function retirement(gender, yearOfBirth, currentYear) {
//     var rest;
//     var diff = currentYear - yearOfBirth;
//     var result;
//     if (typeof yearOfBirth == 'number' && typeof currentYear == 'number') {
//         if (gender === 'm' && diff < 65) {
//             rest = 65 - diff;
//             result = 'There are ' + rest + ' years until retirement';
//         } else if (gender === 'f' && diff < 60) {
//             rest = 60 - diff;
//             result = 'There are ' + rest + ' years until retirement';
//         }
//         else {
//             result = 'Person is already retired';
//         }
//         return result;
//     }
// } console.log(retirement('f', 1969, 2024));

//task13
// function humanizeNumber(number) {
//     var suffix = '';
//     switch (number % 10) {
//         case 1:
//             suffix = 'st';
//             break;
//         case 2:
//             suffix = 'nd';
//             break;
//         case 3:
//             suffix = 'rd';
//             break;
//         default:
//             suffix = 'th';
//     }
//     if (number % 100 >= 11 && number % 100 <= 13) {
//         suffix = 'th';
//     }
//     return number + suffix;
// } console.log(humanizeNumber(13));
