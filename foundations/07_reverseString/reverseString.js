const reverseString = function(text) {
    let reverseText = "";
    for(let i = text.length; i > 0; i--){
        reverseText += text[i - 1];
    }

    return reverseText;

};

function reverseStringAlternative(text){
    return text.split("").reverse().join("")
}

reverseStringAlternative("hello there");

let newString = reverseString("hello there");
console.log(newString.split(" ").slice(0, 1).concat("there").join(" "));
let sortedString = newString.split("").sort((a, b) => b.localeCompare(a)).join("");

// Do not edit below this line
module.exports = reverseString;
