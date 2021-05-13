const express = require('express');
const router = express.Router();
const data = require('../data');
const users = data.users;

// const bluebird = require('bluebird');
// const redis = require('redis');
// const client = redis.createClient();

// bluebird.promisifyAll(redis.RedisClient.prototype);
// bluebird.promisifyAll(redis.Multi.prototype);

router.post('/', async (req,res) => {
    let {name, email, age, gender, height, skill} = req.body;

    if(!name || name==="" || name.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!email || email==="" || email.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!age || age==="" || age.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!gender || gender==="" || gender.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!height || height==="" || height.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }
    if(!skill || skill==="" || skill.trim() === "") {
        return res.status(400).json({error: "You must provide all fields."});
    }

    const parsedAge = parseInt(age);
    const parsedHeight = parseInt(height);

    try {
        const newUser = await users.addNewUser(name, email, parsedAge, gender, parsedHeight, skill);
        return res.sendStatus(200);
    } catch(e) {
        return res.status(400).json({error: "Could not add new user"});
    }
    
});

router.get('/:email', async (req,res) => {
    let email = req.params.email;

    if(!email || email==="" || email.trim() === "") {
        return res.status(400).json({error: "You must provide an email."});
    }

    try {
        const getUser = await users.getUserByEmail(email);
        return res.status(200).json(getUser);
    } catch(e) {
        return res.status(400).json({error: "Could not get user"});
    }
    
});

module.exports = router;