const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg'); // importing pg

// DB CONNECTION

const pool = new pg.Pool({
    database:  '<db name>',  //TODO - get db name from keef
    host:  'localhost',
    port: 5432
})

// GET

koalaRouter.get('/', (req, res) => {
    
    //get koalas from the database
    //write a query a string

    let queryText = `SELECT * FROM "db name"` //TODO - get db name from keef

    // need to send the query to the database

    pool.query(queryText)
        .then (
            (result) => {
            let koalas = result.rows;

            //Send them back to the client
            res.send(koalas);
            }
        )
        .catch(
            (error) =>{
                console.log(`Error making query ${queryText}`, error);
                res.sendStatus(500);
            }
        );
});


// POST


// PUT


// DELETE

module.exports = koalaRouter;