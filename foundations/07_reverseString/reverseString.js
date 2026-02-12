const reverseString = function(text) {
    let reverseText = "";
    for(let i = text.length; i > 0; i--){
        reverseText += text[i - 1];
    }

    return reverseText;

};

reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
