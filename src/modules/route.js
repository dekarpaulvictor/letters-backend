'use strict';
const { Router } = require('express');
const lettersRoute = require('./letters/lettersRouter');
const router = Router();

const init = () => {
    // *** register routes here *** //
    router.use('/letters', lettersRoute)
    return router;
};

module.exports = { init };