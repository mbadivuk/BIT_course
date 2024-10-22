var a = [2, 4, -2, 7, -2, 4, 2];
var isSymmetric = true;
for (var i = 0, j = a.length - 1; i < a.length / 2, j > a.length / 2 - 1; i++, j--) {
    if (a[i] !== a[j]) {
        isSymmetric = false;
        break;
    }
}
console.log(isSymmetric);
