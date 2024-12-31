const findTheOldest = function(people) {
    return people.reduce(
        (oldest, person) => {
            if (!oldest)
                return person;
            const year = new Date().getFullYear();
            const personAge = ((person.yearOfDeath) ? person.yearOfDeath : year) - person.yearOfBirth;
            const oldestAge = ((oldest.yearOfDeath) ? oldest.yearOfDeath : year) - oldest.yearOfBirth;
            return (personAge > oldestAge) ? person : oldest;
        }
    );
};

// Do not edit below this line
module.exports = findTheOldest;
