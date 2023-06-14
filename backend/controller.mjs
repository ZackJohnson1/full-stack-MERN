import 'dotenv/config';
import express from 'express';
import * as matches from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/matches', (req,res) => { 
    matches.createMatch(
        req.body.opponent, 
        req.body.score, 
        req.body.location
        )
        .then(tennisMatch => {
            res.status(201).json(tennisMatch);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'create a document failed' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/matches', (req, res) => {
    matches.retrieveMatches()
        .then(tennisMatch => { 
            if (tennisMatch !== null) {
                res.json(tennisMatch);
            } else {
                res.status(404).json({ Error: 'document not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'retrieve document failed.' });
        });
});


// RETRIEVE by ID controller
app.get('/matches/:_id', (req, res) => {
    matches.retrieveMatchByID(req.params._id)
    .then(tennisMatch => { 
        if (tennisMatch !== null) {
            res.json(tennisMatch);
        } else {
            res.status(404).json({ Error: 'document not found' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'retrieve document failed' });
    });

});


// UPDATE controller ************************************
app.put('/matches/:_id', (req, res) => {
    matches.updateMatch(
        req.params._id, 
        req.body.opponent, 
        req.body.score, 
        req.body.location
    )
    .then(tennisMatch => {
        res.json(tennisMatch);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'document update failed' });
    });
});


// DELETE Controller ******************************
app.delete('/matches/:_id', (req, res) => {
    matches.deleteMatchById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'document no longer exists' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'delete a document failed' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});