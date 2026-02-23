const fibonacci = function (a) {
    a = Number(a);
    let arr = [1, 1];
    let total = 0;
    if (a < 0) {
        return "OOPS";
    } else if (a === 0) {
        return 0;
    } else if (a < 3) {
        return 1;
    } else {
        for (let i = 0; i < a - 2; i++) {
            total = arr[0] + arr[1];
            arr.push(total);
            arr.shift(1);
        }
        return total;
    }
};

console.log(fibonacci(4)); // returns the 4th member of the series: 3  (1, 1, 2, 3)
console.log(fibonacci(6)); // returns 8

// Do not edit below this line
module.exports = fibonacci;
