//task1
// function countVowels(string) {
//     var newString = string.toLowerCase();
//     var counter = 0;
//     for (var i = 0; i < newString.length; i++) {
//         if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u') {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countVowels("Marko BadIvuk BadA"));

//task2
// function combineTwoArrays(arr1, arr2) {
//     var newArray = [];
//     for (var i = 0; i < arr2.length; i++) {
//         newArray.push(arr1[i]);
//         newArray.push(arr2[i]);
//     }
//     return newArray;
// }
// console.log(combineTwoArrays(['a', 'b', 'c'], [1, 2, 3]));

//task3
// function rotate(array, k) {
//     var newArray1 = [];
//     var newArray2 = [];
//     var newArray = [];
//     for (var i = 0; i < array.length; i++) {
//         if (i < k) {
//             newArray1.push(array[i]);
//         } else {
//             newArray2.push(array[i]);
//         }
//     }
//     newArray = newArray2.concat(newArray1);
//     return newArray;
// }
// console.log(rotate([1, 2, 3, 4, 5, 6], 3));

//task4
// function arrayOfDigits(number) {
//     var string = number + "";
//     var newArray = [];
//     for (var i = 0; i < string.length; i++) {
//         newArray.push(string[i] * 1);
//     }
//     return newArray;
// }
// console.log(arrayOfDigits(1280));

//task5
// function multiplicationTable(number) {
//     for (i = 1; i <= 12; i++) {
//         console.log(number + " * " + i + " = " + number * i);
//     }
// }
// multiplicationTable(10);

// function multiplicationTable(n) {
//     var table = "";
//     for (var i = 1; i <= n; i++) {
//         for (var j = 1; j <= n; j++) {
//             table += `${i} x ${j} = ${i * j}\n`;
//         }
//     }
//     return table;
// }
// console.log(multiplicationTable(12));


//task6
// function centrigradeToFahrenheit(celsius) {
//     var fahrenheit = (9 / 5) * celsius + 32;
//     return fahrenheit;
// }
// console.log(centrigradeToFahrenheit(32));

//task7
// function maximum(array) {
//     var max = array[0];
//     for (var i = 1; i < array.length; i++) {
//         if (typeof array[i] !== "number") {
//             continue;
//         }
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }
// console.log(maximum([1, 2, 3, 4, 5]));

//task8
// function maximumAndMinimum(array) {
//     var minimum = array[0];
//     var maximum = array[0];
//     for (var i = 1; i < array.length; i++) {
//         if (array[i] < minimum) {
//             minimum = array[i];
//         }
//         if (array[i] > maximum) {
//             maximum = array[i];
//         }
//     }
//     return [minimum, maximum];
// }
// console.log(maximumAndMinimum([2, 3, 1, 4]));

//task9
// function median(array) {
//     var sortedArray = array.sort((a, b) => a - b);
//     var medianValue;
//     for (var i = 0; i < sortedArray.length; i++) {
//         if (sortedArray.length % 2 == 1) {
//             medianValue = sortedArray[(sortedArray.length / 2) - .5];
//         }
//         else {
//             medianValue = (sortedArray[(sortedArray.length / 2) - 1] + sortedArray[sortedArray.length / 2]) / 2;
//         }
//     }
//     return medianValue;
// }
// console.log(median([2, 1, 4, 5, 3, 6]));

//task10
// function mostFrequentElement(array) {
//     var newArray = array.sort((a, b) => a - b);
//     var currentCounter = 1;
//     var mostFrequentCounter = 1;
//     var currentElement = newArray[0];
//     var mostFrequentElement = newArray[0];
//     for (var i = 1; i < newArray.length; i++) {
//         if (newArray[i] == currentElement) {
//             currentCounter++;
//         }
//         else {
//             currentElement = newArray[i];
//             currentCounter = 1;
//         }
//         if (mostFrequentCounter < currentCounter) {
//             mostFrequentCounter = currentCounter;
//             mostFrequentElement = currentElement;
//         }
//     }
//     return [mostFrequentElement, mostFrequentCounter];
// }
// console.log(mostFrequentElement([1, 1, 2, 2, 1, 3, 1, 4, 5, 2, 2, 2, 7, 7, 7, 7]));

//task11
// function returnElementsOfArray(array) {
//     var newArray = [];
//     for (var i = 0; i < array.length; i++) {
//         if (array.length % 2 == 1) {
//             return [array[0], array[(array.length / 2) - .5], array[array.length - 1]];
//         }
//         else {
//             return [array[0], array[array.length - 1]];
//         }
//     }
//     return newArray;
// }
// console.log(returnElementsOfArray([]));

//task12
// function averageValue() {
//     var sum = 0;
//     var average;
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     average = sum / arguments.length;
//     return average;
// }
// console.log(averageValue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//task13
// function greaterThanAverage() {
//     var newArray = [];
//     var average = averageValue(...arguments);
//     for (var i = 0; i < arguments.length; i++) {
//         if (arguments[i] > average) {
//             newArray.push(arguments[i]);
//         }
//     }
//     return newArray;
// }
// console.log(greaterThanAverage(1, 2, 3, 4, 5, 6));

//task14
// function bodyMassIndex(weight, height) {
//     var bmi = weight / (height * height);
//     if (bmi < 15) {
//         return "Starvation";
//     }
//     if (bmi >= 15 && bmi < 17.5) {
//         return "Anorexic";
//     }
//     if (bmi >= 17.5 && bmi < 18.5) {
//         return "Underweight";
//     }
//     if (bmi >= 18.5 && bmi < 25) {
//         return "Ideal";
//     }
//     if (bmi >= 25 && bmi < 30) {
//         return "Overweight";
//     }
//     if (bmi >= 30 && bmi < 40) {
//         return "Obese";
//     }
//     else {
//         return "Morbidly obese";
//     }
// }
// console.log(bodyMassIndex(105, 1.88));
