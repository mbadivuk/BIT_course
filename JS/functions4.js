//task1
// function isElementInArray(inputElement, inputArray) {
//     for (var i = 0; i < inputArray.length; i++) {
//         if (inputElement === inputArray[i]) {
//             return "yes";
//         }
//     }
//     return "no";
// }
// console.log(isElementInArray(3, [5, -4, 2, 18, 7]));

//task2
// function multiplyPositiveElement(inputArray) {
//     var newArray = [];
//     for (var i = 0; i < inputArray.length; i++) {
//         if (inputArray[i] > 0) {
//             inputArray[i] *= 2;
//         }
//         newArray[newArray.length] = inputArray[i];
//     }
//     return newArray;
// }
// console.log(multiplyPositiveElement([-3, 11, 5, 3.4, -8]));

//task3
// function minimumOfArray(inputArray) {
//     var min = inputArray[0];
//     var index;
//     for (var i = 1; i < inputArray.length; i++) {
//         if (inputArray[i] < min) {
//             min = inputArray[i];
//             index = i;
//         }
//     }
//     return [min, index];
// }
// console.log(minimumOfArray([4, 2, 2, -1, 6]));

//task4
// function secondSmallestNumber(arr) {
//     var smallest = arr[0];
//     var secondSmallest = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             secondSmallest = smallest;
//             smallest = arr[i];
//         }
//         else if (arr[i] < secondSmallest && arr[i] !== smallest) {
//             secondSmallest = arr[i];
//         }
//     }
//     return secondSmallest;
// }
// console.log(secondSmallestNumber([4, 2, 2, -1, 6]));

//task5
// function sumOfPositiveNumbers(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumOfPositiveNumbers([3, 11, -5, -3, 2]));

//task6
function symmetric(arr) {
    for (i = 0; i < arr.length / 2; i++) {
        for (j = arr.length - 1; j > arr.length / 2 - 1; j--) {
            if (arr[i] == arr[j]) {
                return "The array is symmetric."
            }
        }
    }
    return "The array isn'/t symmetric."
}
console.log(symmetric([2, 4, -2, 7, 5, -2, 4, 2]));


//task7
// function intertwine(arr1, arr2) {
//     var newArr = [];
//     for (var i = 0; i < arr2.length; i++) {
//         newArr[newArr.length] = arr1[i];
//         newArr[newArr.length] = arr2[i];
//     }
//     return newArr;
// }
// console.log(intertwine([4, 5, 6, 2], [3, 8, 11, 9]));

//task8
// function concatenate(arr1, arr2) {
//     var newArr = [];
//     newArr = arr1.concat(arr2);
//     return newArr;
// }
// console.log(concatenate([4, 5, 6, 2], [3, 8, 11, 9]));

//task9
// function deleteElement(e, a) {
//     var newArr = [];
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] !== e) {
//             newArr.push(a[i]);
//         }
//     }
//     return newArr;
// }
// console.log(deleteElement(2, [4, 6, 2, 8, 2, 2]));
