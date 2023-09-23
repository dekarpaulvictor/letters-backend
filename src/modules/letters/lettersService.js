const letters = require("../../helpers/mockData");

class LettersService {

    // Adds a new letter to the letters array
    add(letter) {
        letters.push({
            id: letters.length + 1,
            date: new Date(),
            timeToRead: Math.floor(Math.random() * 10) + 1,
            ...letter
        });

        // Returns the last letter added
        return letters[letters.length - 1];
    }

    // Returns all letters
    getAll() {
        return letters;
    }

    // Returns a single letter by id
    getById(id) {
        return letters.find(letter => letter.id === parseInt(id));
    }
}

module.exports = LettersService;