const leapYears = function(year) {

    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 &&Number.isInteger(year)){
        return true;
    } else {
        return false;
    }

};

console.log(leapYears(1200));

// Do not edit below this line
module.exports = leapYears;
