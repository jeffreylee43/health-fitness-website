const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const { ObjectId } = require('mongodb');


module.exports = {
    async addWorkoutNote(subject, email, exerciseName, comments, sets, reps, date) {
        if(!subject || typeof subject !== 'string') throw 'You must provide a valid subject';
        if(!email || typeof email !== 'string') throw 'You must provide a valid email address';
        if(!exerciseName || typeof exerciseName !== 'string') throw 'You must provide a valid exercise name';
        if(!comments || typeof comments !=='string') throw 'Comments must be provided'
        if(!sets || typeof sets !== "number") throw 'Sets must be provided and must be a number.';
        if(!reps || typeof reps !== "number") throw 'Reps must be provided and must be a number.';
        if(!date || typeof date !== 'string') throw 'Date must be provided and must be a string.';

        const userCollection = await users();

        let newNote = {
            _id: ObjectId(),
            subject: subject,
            exerciseName: exerciseName,
            comments: comments,
            sets: sets,
            reps: reps,
            date: date,
        }

        const insertNote = await userCollection.updateOne({email: email}, {$push: {journal: newNote}});
        if (insertNote.modifiedCount === 0) {
            throw 'Could not update the journal successfully';
        }
        // const newId = insertNote.insertedId.toString();
        const getNote = await this.getNoteById(email, newNote._id.toString());
        return getNote;
        
    },
    async addDietNote(subject, email, foodName, calories, foodType, date, comments) {
        if(!subject || typeof subject !== 'string') throw 'You must provide a valid subject';
        if(!email || typeof email !== 'string') throw 'You must provide a valid email address';
        if(!foodName || typeof foodName !== 'string') throw 'You must provide a valid food name';
        if(!comments || typeof comments !=='string') throw 'Comments must be provided'
        if(!calories || typeof calories !== "number") throw 'Calories must be provided and must be a number.';
        if(!foodType || typeof foodType !== 'string') throw 'Food type must be provided and must be a string.';
        if(!date || typeof date !== 'string') throw 'Date must be provided and must be a string.';

        const userCollection = await users();

        let newNote = {
            _id: ObjectId(),
            subject: subject,
            foodName: foodName,
            calories: calories,
            foodType: foodType,
            date: date,
            comments: comments
        }

        const insertNote = await userCollection.updateOne({email: email}, {$push: {journal: newNote}});
        if (insertNote.modifiedCount === 0) {
            throw 'Could not update the journal successfully';
        }
        // const newId = insertNote.insertedId.toString();
        const getNote = await this.getNoteById(email, newNote._id.toString());
        return getNote;
        
    },

    async addOtherNote(subject, email, titleSubject, comments) {
        if(!subject || typeof subject !== 'string') throw 'You must provide a valid subject';
        if(!email || typeof email !== 'string') throw 'You must provide a valid email address';
        if(!titleSubject || typeof titleSubject !== 'string') throw 'You must provide a valid title subject';
        if(!comments || typeof comments !=='string') throw 'Comments must be provided'

        const userCollection = await users();

        let newNote = {
            _id: ObjectId(),
            subject: subject,
            titleSubject: titleSubject,
            comments: comments
        }

        const insertNote = await userCollection.updateOne({email: email}, {$push: {journal: newNote}});
        if (insertNote.modifiedCount === 0) {
            throw 'Could not update the journal successfully';
        }
        // const newId = insertNote.insertedId.toString();
        const getNote = await this.getNoteById(email, newNote._id.toString());
        return getNote;
        
    },

    async getNoteById(email, id) {
        if(!email || typeof email !== 'string' || email === "" || email.trim() === "") throw 'The email must be provided';
        if(!id || typeof id !== 'string' || id === "" || id.trim() === "") throw 'The id must be provided';
        let parsedId = ObjectId(id);

        // const journalCollection = await journal();
        const userCollection = await users();

        const foundEmail = await userCollection.findOne({email: email});
        if(foundEmail === null) throw 'There are no emails with the email address provided.';
        let noteExists = false;
        let foundNote = null;
        for(let i = 0; i < foundEmail.journal.length; i++) {
            if(id === foundEmail.journal[i]._id.toString()) {
                foundNote = foundEmail.journal[i];
                noteExists = true;
                break;
            }
        }
        if(!noteExists) throw 'Could not find note with provided id';
        const stringId = foundNote._id.toString();
        foundNote._id = stringId;
        return foundNote;
    },

    async getJournal(email) {
        if(!email || typeof email !== 'string' || email === "" || email.trim() === "") throw 'The email must be provided';

        const userCollection = await users();
        const foundEmail = await userCollection.findOne({email: email});
        if(foundEmail === null) throw 'There are no emails with the email address provided.';

        return foundEmail.journal;
    },
    
    async deleteNote(email, id) {
        if(!email || typeof email !== 'string' || email === "" || email.trim() === "") throw 'The email must be provided';
        if(!id || typeof id !== 'string' || id === "" || id.trim() === "") throw 'The id must be provided';

        const userCollection = await users();
        const deleteNote = await userCollection.updateOne({email: email}, {$pull: {journal: {_id: ObjectId(id)}}});
        if (deleteNote.modifiedCount === 0) {
            throw 'could not update the journal successfully';
        }
        return "success";
    }
};