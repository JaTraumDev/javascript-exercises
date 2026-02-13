const removeFromArray = function(arr, ...remove) {
    return arr.filter((items) => {
        return !remove.includes(items);
    })
};

removeFromArray([1, 2, 3, 4, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
