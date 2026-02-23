const books = [
    {
        title: "Book",
        author: "Name",
    },
    {
        title: "Book2",
        author: "Name2",
    },
];

const getTheTitles = function (books = []) {
    const bookNames = books.map((book) => book.title);
    return bookNames;
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
