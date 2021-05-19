const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const { ObjectId } = require('mongodb');
const social = require("./social");

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
            journal: [],
            likedPosts: []
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
        return foundUser;
    },

    async addLikedPost(email, postid){
        if(!email || email === "" || email.trim() === "") throw 'A non-empty email must be provided';
        const user1 = await this.getUserByEmail(email);
        const UserCollection = await users();
        let updatedUserData = {};
        let arr = user1.likedPosts;
        let isNewPost = true;
        for (let fl of arr) {
            if (fl == postid) {
                isNewPost = false;
            }
        }
        if (isNewPost) {
            arr.push(postid);
            updatedUserData.likedPosts = arr;
            const updatedInfo = await UserCollection.updateOne(
                { _id: user1._id },
                { $set: updatedUserData }
            );
            if (updatedInfo.modifiedCount === 0) {
                throw 'could not update users liked posts successfully';
            }
        }
        return isNewPost;
    },
    async removeLikedPost(email, postid){
        if(!email || email === "" || email.trim() === "") throw 'A non-empty email must be provided';
        const user1 = await this.getUserByEmail(email);
        const UserCollection = await users();
        let updatedUserData = {};
        let arr = user1.likedPosts;

        for(let i = 0; i < arr.length; i++){          
            if (arr[i] === postid) { 
                arr.splice(i, 1);
            }
        }
        updatedUserData.likedPosts = arr;   
        const updatedInfo = await UserCollection.updateOne(
            { _id: user1._id },
            { $set: updatedUserData }
        );
        if (updatedInfo.modifiedCount === 0) {
            throw 'could not update users liked posts successfully';
        }
        return true;
    },
    async getAllLikedByUser(email){
        if(!email || email === "" || email.trim() === "") throw 'A non-empty email must be provided';
        const user1 = await this.getUserByEmail(email);
        let arr = user1.likedPosts;
        let outputarr = [];
        
        for (let fl of arr) {
            const likedpost = await social.getPostByID(fl);
            outputarr.push(likedpost);
        }
        return outputarr;
    }
    
};