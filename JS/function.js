// function sum(a, b) {
//     return a + b;
// }

// var c = sum(3, 2);
// console.log(c);

function findMinimum(input) {
    var min = Infinity;
    for (var i = 0; i < input.length; i++) {
        if (input[i] < min) {
            min = input[i];
        }
    }
    return min;
}

console.log(findMinimum([4, 2, 2, -1, 6]));

function findsecondMinimum(input) {
    var minimum = findMinimum(input);
    var secondMin = Infinity;
    for (var i = 0; i < input.length; i++) {
        if (input[i] < secondMin && input[i] > minimum) {
            secondMin = input[i];
        }
    }
    return secondMin;
} console.log(findsecondMinimum([4, 2, 2, -1, 6]));
