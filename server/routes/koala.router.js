const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET

koalaRouter.get('/', (req, res) => {
    res.send(koalas);
});


// POST


// PUT


// DELETE

module.exports = koalaRouter;