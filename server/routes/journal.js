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
    let {subject, email, exerciseName, comments, sets, reps, date} = req.body;

    if(!subject || subject==="" || subject.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
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
        const addNote = await journal.addWorkoutNote(subject, email, exerciseName, comments, parsedSets, parsedReps, date);
        // const getJournal = await journal.getJournal(email);
        // await client.setAsync(`journal${email}`, JSON.stringify(getJournal));
        return res.sendStatus(200);
    } catch(e) {
        return res.status(400).json({error: e});
    }
    
});

router.post('/addDietNote', async (req,res) => {
    let {subject, email, foodName, calories, foodType, date, comments} = req.body;

    if(!subject || subject==="" || subject.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!email || email==="" || email.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!foodName || foodName==="" || foodName.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!calories || calories==="" || calories.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!foodType || foodType==="" || foodType.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!date || date==="" || date.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!comments || comments==="" || comments.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }

    const parsedCalories = parseInt(calories);

    try {
        const addNote = await journal.addDietNote(subject, email, foodName, parsedCalories, foodType, date, comments);
        // const getJournal = await journal.getJournal(email);
        // await client.setAsync(`journal${email}`, JSON.stringify(getJournal));
        return res.sendStatus(200);
    } catch(e) {
        return res.status(400).json({error: e});
    }
    
});

router.post('/addOtherNote', async (req,res) => {
    let {subject, email, titleSubject, comments} = req.body;

    if(!subject || subject==="" || subject.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!email || email==="" || email.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!titleSubject || titleSubject==="" || titleSubject.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!comments || comments==="" || comments.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }

    try {
        const addNote = await journal.addOtherNote(subject, email, titleSubject, comments);
        // const getJournal = await journal.getJournal(email);
        // await client.setAsync(`journal${email}`, JSON.stringify(getJournal));
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

    // let journalEmail = await client.getAsync(`journal${email}`);
    // if(journalEmail) {
    //     return res.send(JSON.parse(journalEmail));
    // }

    try {
        const getJournal = await journal.getJournal(email);
        // await client.setAsync(`journal${email}`, JSON.stringify(getJournal));
        return res.send(getJournal);
    } catch(e) {
        return res.status(400).json({error: e});
    }
    
});

router.delete('/deleteNote/:email/:id', async (req,res) => {
    let email = req.params.email;
    let id = req.params.id;
    if(!email || email==="" || email.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!id || id==="" || id.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }

    // let journalEmail = await client.getAsync(`journal${email}`);
    // if(journalEmail) {
    //     return res.send(JSON.parse(journalEmail));
    // }

    try {
        const deleteNote = await journal.deleteNote(email, id);
        // await client.setAsync(`journal${email}`, JSON.stringify(getJournal));
        return res.sendStatus(200);
    } catch(e) {
        return res.status(400).json({error: e});
    }
    
});

module.exports = router;