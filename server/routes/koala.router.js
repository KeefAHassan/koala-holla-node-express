const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg'); // importing pg

// DB CONNECTION

const pool = new pg.Pool({
    database:  'koala',  
    host:  'localhost',
    port: 5432
})

// GET

koalaRouter.get('/', (req, res) => {
    
    //get koalas from the database
    //write a query a string

    let queryText = `SELECT * FROM "Koala";`;

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

koalaRouter.post('/', (req, res) => {


//anticipating the req body will look like:

// {name: ,
//  favorite_color
//  age:  ,
//  ready_to_transfer: ,
//  notes   ,
// }

console.log (req.body);
let newKoala = req.body;


let queryText = `
    INSERT INTO "Koala" ("name", "favorite_color", "age", "ready_to_transfer", "notes")
    VALUES
    ($1, $2, $3, $4, $5)
    ;`

//Need to pass the query into the pool, along with a second parameter
// The second parameter is the list of things we want pg to safely put into the template

pool.query(queryText, [newKoala.name, newKoala.favorite_color, newKoala.age, newKoala.ready_to_transfer, newKoala.notes])
    .then(
        (result) => {
            console.log(`this post query worked, ${queryText}`, result);
            res.sendStatus(201);
        }
    ) 
    .catch(
        (error) => {
            console.log (`this post query failed, ${queryText}`, error);
            res.sendStatus(500)
        }
    );

});

// PUT

koalaRouter.put ('/mark/:id', (req, res) =>{

    console.log('in the put on the server');

    const koalaId = req.params.id;

    const sqlQuery = `UPDATE "koala" SET ready_for_transfer = true WHERE id=$1;`;

    pool.query(sqlQuery, [koalaId])
        .then(
            (result) => {
                console.log(`Update query worked! ${sqlQuery}`, result);
                res.sendStatus(200);
            }
        )
        .catch (
            (error) => {
                console.log(`Update query failed, ${sqlQuery}`, error);
                res.sendStatus(400);
            }
        );



    
})


// DELETE

module.exports = koalaRouter;