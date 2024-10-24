//task1
// function digitInString(string, digit) {
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] == digit) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(digitInString("1bser9re", 5));

//task2
// function replaceJS(string) {
//     var array = string.split(" ");
//     var final = "";
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === "JS") {
//             array[i] = "**";
//         }
//         final += array[i] + " ";
//     }
//     return final;
// }
// console.log(replaceJS("Programming in JS is super interesting!"));

//task3
// function insertChar(str, pos, char) {
//     var array1 = [];
//     var array2 = [];
//     var str1 = "";
//     var str2 = "";
//     var final;
//     if (str.length < 0 || pos > str.length) {
//         return "Invalid!";
//     }
//     for (var i = 0; i < pos - 1; i++) {
//         array1.push(str[i]);
//     }
//     for (var i = pos - 1; i < str.length; i++) {
//         array2.push(str[i]);
//     }
//     for (var i = 0; i < array1.length; i++) {
//         str1 += array1[i];
//     }
//     for (var i = 0; i < array2.length; i++) {
//         str2 += array2[i];
//     }
//     final = str1 + char + str2;
//     return final;
// }
// console.log(insertChar("Goo morning!", 4, "d")) //slice method also works

//task4
function deleteChar(str, pos) {
    var str1 = "";
    var str2 = "";
    var final;
    for (var i = 0; i < pos; i++) {
        str1 += str[i];
    }

}
console.log(deleteChar("Goodd morning!", 3));