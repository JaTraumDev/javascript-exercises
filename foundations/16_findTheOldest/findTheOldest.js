function sortByOldestPerson() {
    const currentYear = new Date().getFullYear();

    return (a, b) => {
        const ageA = (a.yearOfDeath ?? currentYear) - a.yearOfBirth;
        const ageB = (b.yearOfDeath ?? currentYear) - b.yearOfBirth;

        return ageB - ageA;
    };
}
const findTheOldest = function (people) {
    people.sort(sortByOldestPerson());
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
