const LettersService = require('../src/modules/letters/lettersService');
const { default: test } = require('ava');

const lettersService = new LettersService();

test('test if letters are 20', t => {
    const result = lettersService.getAll();
    t.is(result.length, 20);
});

test('test if letter is found', t => {
    const result = lettersService.getById('1');
    t.is(result.id, 1);
});

test('test if a new letter is added', t => {
    const letter = {
        title: "Artificial Intelligence in Healthcare",
        body: "AI is making significant strides in the healthcare sector, from diagnosing diseases to drug discovery. We examine the role of AI in improving patient care, reducing healthcare costs, and addressing global health challenges. Explore the intersection of technology and healthcare with us.",
        image: "https://example.com/image15.jpg",
        author: "Michael Turner",
        date: "2023-10-07",
        timeToRead: 6
    };
    lettersService.add(letter);

    const result = lettersService.getById('21');
    t.is(result.id, 21);
})