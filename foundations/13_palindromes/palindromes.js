const palindromes = function (text = "") {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanedText = text
        .toLowerCase()
        .split("")
        .filter((character) => alphabet.includes(character))
        .join();

    reversedText = cleanedText.split("").reverse().join();

    return reversedText === cleanedText;
};

console.log(palindromes("Racecar!"));

// Do not edit below this line
module.exports = palindromes;
