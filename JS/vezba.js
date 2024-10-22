// function newArray(array) {
//     var newArray = [];
//     var value;
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
//         value = (element / 2) + 5;
//         if (value === 0) {
//             value = 20;
//         }
//         newArray[newArray.length] = value;
//     }
//     return newArray;
// } console.log(newArray([3, 500, -10, 149, 53, 414, 1, 19]));

// function reversedString(string) {
//     var reversed = '';
//     for (var i = string.length - 1; i >= 0; i--) {
//         var element = string[i];
//         reversed += element;
//     }
//     return reversed;
// } console.log(reversedString('Belgrade Institute Of Technology'));

// function sortArray(array) {
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < array.length; j++) {
//             if (array[i] < array[j]) {
//                 var temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }
//     return array;
// }
// console.log(sortArray([3, 2, 4, 1]));
