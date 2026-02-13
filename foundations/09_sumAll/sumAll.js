const sumAll = function(start = 0, end = 0) {
    
    let arr = [];

    if(start < 0 || end < 0 || start % 1 != 0 || end % 1 !== 0 || typeof start === "string" || typeof end === "string"){
        return "ERROR";
    }

    if(start > end){
        for(let i = end; i <= start; i++){
            arr.push(i);
        }
    } else {
        for(let i = start; i <= end; i++){
            arr.push(i);
        }
    }
    
    return arr.reduce((total, items) => {
        return total + items;
    }, 0)

};

sumAll(10, );

// Do not edit below this line
module.exports = sumAll;
