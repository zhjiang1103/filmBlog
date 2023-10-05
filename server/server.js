const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my Film App API' });
});

// create the get request for films in the endpoint '/api/films'
app.get('/api/films', async (req, res) => {
    try {
       // const { rows: contact } = await db.query('SELECT * FROM contact');
        const { rows: film } = await db.query('SELECT * FROM playingfilms');
        res.send(film);
    } catch (e) {
        console.error(e);
        return res.status(400).json({ e });
    }
});

// create the POST request
app.post('/api/films', async (req, res) => {
    try {
        const newFilm = {
            name: req.body.name,
            released: req.body.released,
            category: req.body.category,
            description: req.body.description,
            url:req.body.url,
        };
        //console.log([newFilm.name, newFilm.released, newFilm.category, newFilm.description]);
        const result = await db.query(
            'INSERT INTO playingfilms(name, released, category, description,url) VALUES($1, $2, $3, $4, $5) RETURNING *',
            [newFilm.name, newFilm.released, newFilm.category, newFilm.description, newFilm.url],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});

// get request for individual film based on ID
app.get('/api/films/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { rows: film } = await db.query('SELECT * FROM playingfilms WHERE id=$1', [id]);
        console.log("From select by ID", id);
        res.send(film);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });

    }
});

// //A put request - Update a contact 
// app.put('/api/contactlist/:contactId', async (req, res) =>{
//     //console.log(req.params);
//     //This will be the id that I want to find in the DB - the contact to be updated
//     const contactId = req.params.contactId
//     const updatedContact = { id: req.body.id, name: req.body.name, email: req.body.email, phone: req.body.phone, notes: req.body.notes }
//     console.log("In the server from the url - the contact id", contactId);
//     console.log("In the server, from the react - the contact to be edited", updatedContact);
//     // UPDATE students SET lastname = "something" WHERE id="16";
//     const query = `UPDATE contact SET name=$1, email=$2, phone=$3, notes=$4 WHERE id=${contactId} RETURNING *`;
//     const values = [updatedContact.name, updatedContact.email, updatedContact.phone, updatedContact.notes];
//     try {
//       const updated = await db.query(query, values);
//       console.log(updated.rows[0]);
//       res.send(updated.rows[0]);
  
//     }catch(e){
//       console.log(e);
//       return res.status(400).json({e})
//     }
//   })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});