const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr = []) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr.reduce((total, element) => {
            return (total += element);
        }, 0);
    }
};

const multiply = function (arr) {
    return arr.reduce((total, element) => {
        return (total *= element);
    }, 1);
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (a) {
    let total = 1;
    for (let i = 1; i <= a; i++) {
        total *= i;
    }
    return total;
};

console.log(factorial(1));

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
