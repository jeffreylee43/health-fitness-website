const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const { ObjectId } = require('mongodb');


module.exports = {
    async addNewUser(name, email, age, gender, height, skill, profilepic) {
        if(!name || typeof name !== 'string') throw 'You must provide valid name';
        if(!email) throw 'Email must be provided'
        if(!age || typeof age !== "number") throw 'Your age must be provided and must be a number.';
        if(!gender || typeof gender !== 'string') throw 'Your gender must be provided and must be a string.';
        if(!height || typeof height !== "number") throw 'Your height must be provided and must be a number.';
        if(!skill || typeof skill !== 'string') throw 'Your skill must be provided and must be a string.';
        if(!profilepic){
            profilepic = "noImage.jpg";
        }

        const userCollection = await users();

        let newUser = {
            name: name,
            email: email.toLowerCase(),
            age: age,
            gender: gender,
            height: height,
            skill: skill,
            profilepic: profilepic,
            journal: []
        }

        const insertUser = await userCollection.insertOne(newUser);
        if(insertUser.insertedCount === 0) throw 'Could not create the new user.';

        const newId = insertUser.insertedId.toString();
        const getUser = await this.getUserById(newId);
 
        return getUser;
    },

    async getUserById(id) {
        if(!id || typeof id !== 'string' || id === "" || id.trim() === "") throw 'The id must be provided';
        let parsedId = ObjectId(id);

        const userCollection = await users();

        const foundUser = await userCollection.findOne({_id: parsedId});
        if(foundUser === null) throw 'There are no users with the id provided.';

        const stringId = foundUser._id.toString();
        foundUser._id = stringId;

        return foundUser;
    },

    async getUserByEmail(email) {
        if(!email || typeof email !== 'string' || email === "" || email.trim() === "") throw 'The email must be provided';

        const userCollection = await users();

        const foundUser = await userCollection.findOne({email: email});
        if(foundUser === null) throw 'There are no users with the email provided.';

        let sendUser = {
            name: foundUser.name,
            email: foundUser.email,
            age: foundUser.age,
            gender: foundUser.gender,
            height: foundUser.height,
            skill: foundUser.skill,
            profilepic: foundUser.profilepic
        }

        return sendUser;
    }
};