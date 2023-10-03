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
    res.json({ message: 'Welcome to my contact list API' });
});

// create the get request for contact in the endpoint '/api/contactlist'
app.get('/api/contactlist', async (req, res) => {
    try {
       // const { rows: contact } = await db.query('SELECT * FROM contact');
        const { rows: contact } = await db.query('SELECT * FROM contact');
        res.send(contact);
    } catch (e) {
        console.error(e);
        return res.status(400).json({ e });
    }
});

// create the POST request
app.post('/api/contactlist', async (req, res) => {
    try {
        const newContact = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            notes: req.body.notes,
        };
        //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
        const result = await db.query(
            'INSERT INTO contact(name, email, phone, notes) VALUES($1, $2, $3, $4) RETURNING *',
            [newContact.name, newContact.email, newContact.phone, newContact.notes],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});

// delete request for students
app.delete('/api/contactlist/:contactId', async (req, res) => {
    try {
        const contactId = req.params.contactId;
        await db.query('DELETE FROM contact WHERE id=$1', [contactId]);
        console.log("From the delete request-url", contactId);
        res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });

    }
});

//A put request - Update a contact 
app.put('/api/contactlist/:contactId', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the contact to be updated
    const contactId = req.params.contactId
    const updatedContact = { id: req.body.id, name: req.body.name, email: req.body.email, phone: req.body.phone, notes: req.body.notes }
    console.log("In the server from the url - the contact id", contactId);
    console.log("In the server, from the react - the contact to be edited", updatedContact);
    // UPDATE students SET lastname = "something" WHERE id="16";
    const query = `UPDATE contact SET name=$1, email=$2, phone=$3, notes=$4 WHERE id=${contactId} RETURNING *`;
    const values = [updatedContact.name, updatedContact.email, updatedContact.phone, updatedContact.notes];
    try {
      const updated = await db.query(query, values);
      console.log(updated.rows[0]);
      res.send(updated.rows[0]);
  
    }catch(e){
      console.log(e);
      return res.status(400).json({e})
    }
  })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});