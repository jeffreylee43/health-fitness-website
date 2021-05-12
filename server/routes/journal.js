const express = require('express');
const router = express.Router();
const data = require('../data');
const journal = data.journal;

// const bluebird = require('bluebird');
// const redis = require('redis');
// const client = redis.createClient();

// bluebird.promisifyAll(redis.RedisClient.prototype);
// bluebird.promisifyAll(redis.Multi.prototype);

router.post('/addWorkoutNote', async (req,res) => {
    let {email, exerciseName, comments, sets, reps, date} = req.body;

    if(!email || email==="" || email.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!exerciseName || exerciseName==="" || exerciseName.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!comments || comments==="" || comments.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!sets || sets==="" || sets.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!reps || reps==="" || reps.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!date || date==="" || date.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }

    const parsedSets = parseInt(sets);
    const parsedReps = parseInt(reps);

    try {
        const addNote = await journal.addWorkoutNote(email, exerciseName, comments, parsedSets, parsedReps, date);
        return res.sendStatus(200);
    } catch(e) {
        return res.status(400).json({error: e});
    }
    
});

router.get('/:email', async (req,res) => {
    let email = req.params.email;
    if(!email || email==="" || email.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }

    try {
        const getJournal = await journal.getJournal(email);
        return res.send(getJournal);
    } catch(e) {
        return res.status(400).json({error: e});
    }
    
});

module.exports = router;