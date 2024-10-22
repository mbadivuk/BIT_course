//task1
// var maximum;
// function max(a, b) {
//     if (a > b) {
//         maximum = a;
//     } else {
//         maximum = b;
//     }
//     return maximum;
// } console.log(max(5, 10));

//task2
// var result = '';
// function oddNumber(a) {
//     if (a % 2 !== 0) {
//         result = a + ' is an odd number';
//     }
//     else {
//         result = a + ' is not an odd number';
//     }
//     return result;
// } console.log(oddNumber(5));

//task3
// var result = '';
// function threedigitNumber(a) {
//     var numString = a + '';
//     if (numString.length === 3) {
//         result = a + ' is a three digit long number';
//     } else {
//         result = a + ' is not a three digit long number';
//     }
//     return result;
// } console.log(threedigitNumber(35));

//task4
// var a = [1, 2, 3, 4];
// var arValue = 0;
// function arithmeticValue() {
//     for (var i = 0; i < a.length; i++) {
//         var element = a[i];
//         arValue += element / a.length;
//     }
//     return arValue;
// } console.log(arithmeticValue(a));

//task7
// var result;
// function numOfDigits(a) {
//     var numString = a + '';
//     result = 'Number of digits of ' + a + ' is ' + numString.length;
//     return result;
// } console.log(numOfDigits(3458));

//task8
// var a = [2, 4, 7, 8, 7, 7, 1];
// var sum = 0;
// function numOfApp() {
//     for (var i = 0; i < a.length; i++) {
//         var element = a[i];
//         if (element === 7) {
//             sum += 1;
//         }
//     }
//     return sum;
// } console.log(numOfApp(a));

//task9
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var sum = 0;
// function sumOfOddNum() {
//     for (var i = 0; i < a.length; i++) {
//         var element = a[i];
//         if (element % 2 != 0) {
//             sum += element;
//         }
//     }
//     return sum;
// } console.log(sumOfOddNum(a));

//task10
// var string = 'Marko Badivuk Bada';
// var sum = 0;
// function numOfString() {
//     for (var i = 0; i < string.length; i++) {
//         var element = string[i];
//         if (element === 'a' || element === 'A') {
//             sum += 1;
//         }
//     }
//     return sum;
// } console.log(numOfString(string));

//task11
// var string = 'abc';
// var count = 6;
// var result = '';
// function concatenate() {
//     result = string.repeat(count);
//     return result;
// } console.log(concatenate(string, count));
