'use strict';

const router = require('express').Router();
const LettersService = require("./lettersService");

router.get('/', async function (req, res) {
    try {
        const lettersService = new LettersService();
        const response = lettersService.getAll();
        if (response.length)
            return res.status(200).json(response);

        return res.status(404).json({ message: 'No letters found' });
    } catch (error) {
        return res.status(error.status || 500).send(error);
    }
});

router.get('/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const lettersService = new LettersService();
        const response = lettersService.getById(id);
        if (response)
            return res.status(200).json(response);

        return res.status(404).json({ message: `No letter found matching id: ${id}` });

    } catch (error) {
        res.status(error.status || 500).send(error);
    }
});

router.post('/', async function (req, res) {
    try {
        const lettersService = new LettersService();
        const response = lettersService.add(req.body);
        if (response)
            return res.status(201).json(response);

        return res.status(500).json({ message: 'Error adding letter' });
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router;