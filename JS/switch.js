//Task 1 and 2
// var dayNumber = 15;
// var finalResult = "";
// switch (dayNumber) {
//     case 1:
//         console.log(finalResult = "Monday");
//         break;
//     case 2:
//         console.log(finalResult = "Tuesday");
//         break;
//     case 3:
//         console.log(finalResult = "Wednesday");
//         break;
//     case 4:
//         console.log(finalResult = "Thursday");
//         break;
//     case 5:
//         console.log(finalResult = "Friday");
//         break;
//     case 6:
//         console.log(finalResult = "Saturday");
//         break;
//     case 7:
//         console.log(finalResult = "Sunday");
//         break;
//     default:
//         console.log(finalResult = "Input must be a number between 1 and 7");
// }
//Task 3
// var dayNumber = 12;
// var finalResult = "";
// switch (dayNumber) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log(finalResult = "It\'s weekday");
//         break;
//     case 6:
//     case 7:
//         console.log(finalResult = "It\'s weekend");
//         break;
//     default:
//         console.log(finalResult = "Input must be number between 1 and 7");
// }
//Task 4
// var dayNumber = 18;
// var finalResult = "";
// switch (dayNumber) {
//     case 1:
//         finalResult = "January";
//         break;
//     case 2:
//         finalResult = "February";
//         break;
//     case 3:
//         finalResult = "March";
//         break;
//     case 4:
//         finalResult = "April";
//         break;
//     case 5:
//         finalResult = "May";
//         break;
//     case 6:
//         finalResult = "June";
//         break;
//     case 7:
//         finalResult = "July";
//         break;
//     case 8:
//         finalResult = "August";
//         break;
//     case 9:
//         finalResult = "September";
//         break;
//     case 10:
//         finalResult = "October";
//         break;
//     case 11:
//         finalResult = "November";
//         break;
//     case 12:
//         finalResult = "December";
//         break;
//     default:
//         finalResult = "Input must be a number between 1 and 12";
// } console.log(finalResult);
//Task 5
// var dayNumber = 30;
// var finalResult = "";
// switch (dayNumber) {
//     case 3:
//     case 4:
//     case 5:
//         finalResult = "Spring";
//         break;
//     case 6:
//     case 7:
//     case 8:
//         finalResult = "Summer";
//         break;
//     case 9:
//     case 10:
//     case 11:
//         finalResult = "Autumn";
//         break;
//     case 12:
//     case 1:
//     case 2:
//         finalResult = "Winter";
//         break;
//     default:
//         finalResult = "Input must be a number between 1 and 12";
// } console.log(finalResult);
//Task 6
// var grade = "E";
// var finalResult = "";
// switch (grade) {
//     case "A":
//         finalResult = "Good job";
//         break;
//     case "B":
//         finalResult = "Pretty good";
//         break;
//     case "C":
//         finalResult = "Passed";
//         break;
//     case "D":
//         finalResult = "Not so good";
//         break;
//     case "F":
//         finalResult = "Failed";
//         break;
//     default:
//         finalResult = "Unknown grade";
// } console.log(finalResult);
// Task 7
// var cityName = "Paphos";
// var finalResult = "";
// switch (cityName) {
//     case "Belgrade":
//     case "Kragujevac":
//     case "Valjevo":
//         finalResult = "Serbia";
//         break;
//     case "London":
//     case "Manchester":
//         finalResult = "England";
//         break;
//     case "Munich":
//     case "Berlin":
//     case "Bonn":
//     case "Hamburg":
//     case "Dortmund":
//         finalResult = "Germany";
//         break;
//     case "Wien":
//         finalResult = "Austria";
//         break;
//     case "Nicosia":
//     case "Larnaca":
//     case "Paphos":
//     case "Limassol":
//         finalResult = "Cyprus";
//         break;
//     default:
//         finalResult = "Please choose a different city";
// } console.log(finalResult);
//Task 8
var a = 5;
var b = -5;
var operator = "/";
var finalResult;
switch (operator) {
    case "+":
        finalResult = a + b;
        break;
    case "-":
        finalResult = a - b;
        break;
    case "*":
        finalResult = a * b;
        break;
    case "/":
        if (b !== 0) {
            finalResult = a / b;
        } else {
            finalResult = "Not possible";
        }
}console.log(finalResult);