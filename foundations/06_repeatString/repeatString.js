const repeatString = function(text, times) {
    arr = "";
    if(times < 0){
        return "ERROR";
    } else {
        for(let i = 0; i < times; i++){
            arr += text;
        }
        return arr;
    }
    
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
