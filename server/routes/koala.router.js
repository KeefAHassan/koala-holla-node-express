const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

koalas = [
    {
        id: 1,
        name: 'Scotty',
        favorite_color: 'Red',
        age: 4,
        ready_to_transfer: true,
        notes: 'Born in Guatemala'
    },{
        id: 3,
        name: 'Ororo',
        favorite_color: 'Yellow',
        age: 7,
        ready_to_transfer: false,
        notes: 'Loves listening to Paula (Abdul)'
    }
];



// GET

koalaRouter.get('/', (req, res) => {
    res.send(koalas);
});


// POST


// PUT


// DELETE

module.exports = koalaRouter;