// for (var x = 0; x <= 10; x++) {
//     console.log(x * x);
// }
//task1
// for (var a = 1; a <= 15; a++) {
//     if (a % 2 == 0) {
//         console.log(a + ' is an even number');
//     }
//     else {
//         console.log(a + ' is an odd number');
//     }
// }
//task2
// var sum = 0;
// for (var a = 1; a <= 1000; a++) {
//     if (a % 3 == 0 || a % 5 == 0) {
//         sum = sum + a;
//     }
// }
// console.log('The sum is: ' + sum);
//task3
// var array = [1, 2, 3, 4, 5, 6];
// var sum = 0;
// var product = 1;
// for (var index = 0; index < array.length; index++) {
//     var element = array[index];
//     sum = sum + element;
//     product = product * element;
// }
// console.log(sum, product);
//task4
// var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
// var string = '';
// for (var index = 0; index < x.length; index++) {
//     var element = x[index];
//     string = string + element;
// }
// console.log(string);
//task5
// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
// for (var i = 0; i < a.length; i++) {
//     var element = a[i];
//     for (var j = 0; j < element.length; j++) {
//         var element1 = element[j];
//         console.log(element1);
//     }
// }
//task6
// var sum = 0;
// for (var a = 1; a <= 20; a++) {
//     sum = sum + a * a;
// } console.log(sum);
//task7
// var mark = [80, 77, 88, 95, 68];
// var avg = 0;
// for (var i = 0; i < mark.length; i++) {
//     element = mark[i];
//     avg = avg + element / mark.length;
// }
// if (avg < 100 && avg > 90) {
//     console.log('Average grade is A');
// }
// else if (avg < 90 && avg > 80) {
//     console.log('Average grade is B');
// }
// else if (avg < 80 && avg > 70) {
//     console.log('Average grade is C');
// }
// else if (avg < 70 && avg > 60) {
//     console.log('Average grade is D');
// }
// else {
//     console.log('Average grade is F');
// }
//task8
var result;
for (a = 1; a <= 100; a++) {
    if (a % 3 == 0 && a % 5 == 0) {
        console.log('FizzBuzz ' + a);

    }
    else if (a % 3 == 0) {
        console.log('Fizz ' + a);
    }
    else if (a % 5 == 0) {
        console.log('Buzz ' + a);
    }

}






