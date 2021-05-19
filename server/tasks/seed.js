const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const users = data.users;
const journal = data.journal;

const main = async () => {
    const db = await dbConnection();
    await db.dropDatabase();

    /* Create user 1 */
    await users.addNewUser("Alex Smith", "seeduser@email.com", 21, "male", 60, "beginner");
    await users.addNewUser("Bob Jones", "seeduser1@email.com", 20, "male", 60, "beginner");
    await users.addNewUser("Tyrone Lim", "seeduser2@email.com", 20, "male", 51, "beginner");
    await users.addNewUser("Alex Smith", "seeduser3@email.com", 20, "male", 51, "beginner");
    await users.addNewUser("Alex Smith", "seeduser4@email.com", 20, "male", 51, "beginner");
    await users.addNewUser("Alex Smith", "seeduser5@email.com", 21, "male", 51, "beginner");
    await users.addNewUser("Alex Smith", "seeduser6@email.com", 21, "male", 52, "beginner");
    await users.addNewUser("Alex Smith", "seeduser7@email.com", 21, "female", 52, "beginner");
    await users.addNewUser("Alex Smith", "seeduser8@email.com", 22, "female", 53, "beginner");
    await users.addNewUser("Alex Smith", "seeduser9@email.com", 22, "female", 53, "beginner");
    await users.addNewUser("Alex Smith", "seeduser10@email.com", 22, "female", 53, "beginner");
    
    await journal.addWorkoutNote("Workout", "seeduser@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addDietNote("Diet", "seeduser@email.com", "foodName", 150, "Vegetables", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser@email.com", "foodName", 150, "Fruits", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser@email.com", "foodName", 150, "Other", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser@email.com", "foodName", 150, "Grains", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser@email.com", "foodName", 150, "Meat", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser@email.com", "foodName", 150, "Dairy", "05/12/2021", "This was a great diet");
    await journal.addOtherNote("Other", "seeduser@email.com", "To Do1", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser@email.com", "To Do2", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser@email.com", "To Do3", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser@email.com", "To Do4", "I am going to make a resolution.");

    await journal.addWorkoutNote("Workout", "seeduser1@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser1@email.com", "exerciseName", "This was a great exercise", 5, 5, "04/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser1@email.com", "exerciseName", "This was a great exercise", 5, 5, "02/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser1@email.com", "exerciseName", "This was a great exercise", 5, 5, "04/12/2021");
    await journal.addDietNote("Diet", "seeduser1@email.com", "foodName", 150, "Vegetables", "04/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser1@email.com", "foodName", 150, "Fruits", "04/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser1@email.com", "foodName", 150, "Other", "03/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser1@email.com", "foodName", 150, "Grains", "03/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser1@email.com", "foodName", 150, "Meat", "03/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser1@email.com", "foodName", 150, "Dairy", "05/12/2021", "This was a great diet");
    await journal.addOtherNote("Other", "seeduser1@email.com", "To Do1", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser1@email.com", "To Do2", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser1@email.com", "To Do3", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser1@email.com", "To Do4", "I am going to make a resolution.");

    await journal.addWorkoutNote("Workout", "seeduser2@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser2@email.com", "exerciseName", "This was a great exercise", 5, 5, "07/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser2@email.com", "exerciseName", "This was a great exercise", 5, 5, "07/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser2@email.com", "exerciseName", "This was a great exercise", 5, 5, "07/12/2021");
    await journal.addDietNote("Diet", "seeduser2@email.com", "foodName", 150, "Vegetables", "02/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser2@email.com", "foodName", 150, "Fruits", "02/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser2@email.com", "foodName", 150, "Other", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser2@email.com", "foodName", 150, "Grains", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser2@email.com", "foodName", 150, "Meat", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser2@email.com", "foodName", 150, "Dairy", "03/12/2021", "This was a great diet");
    await journal.addOtherNote("Other", "seeduser2@email.com", "To Do1", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser2@email.com", "To Do2", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser2@email.com", "To Do3", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser2@email.com", "To Do4", "I am going to make a resolution.");


    await journal.addWorkoutNote("Workout", "seeduser3@email.com", "exerciseName", "This was a great exercise", 5, 5, "03/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser3@email.com", "exerciseName", "This was a great exercise", 5, 5, "04/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser3@email.com", "exerciseName", "This was a great exercise", 5, 5, "04/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser3@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addDietNote("Diet", "seeduser3@email.com", "foodName", 150, "Vegetables", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser3@email.com", "foodName", 150, "Fruits", "06/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser3@email.com", "foodName", 150, "Other", "06/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser3@email.com", "foodName", 150, "Grains", "08/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser3@email.com", "foodName", 150, "Meat", "08/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser3@email.com", "foodName", 150, "Dairy", "09/12/2021", "This was a great diet");
    await journal.addOtherNote("Other", "seeduser3@email.com", "To Do1", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser3@email.com", "To Do2", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser3@email.com", "To Do3", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser3@email.com", "To Do4", "I am going to make a resolution.");


    await journal.addWorkoutNote("Workout", "seeduser4@email.com", "exerciseName", "This was a great exercise", 5, 5, "09/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser4@email.com", "exerciseName", "This was a great exercise", 5, 5, "02/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser4@email.com", "exerciseName", "This was a great exercise", 5, 5, "02/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser4@email.com", "exerciseName", "This was a great exercise", 5, 5, "03/12/2021");
    await journal.addDietNote("Diet", "seeduser4@email.com", "foodName", 150, "Vegetables", "03/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser4@email.com", "foodName", 150, "Fruits", "06/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser4@email.com", "foodName", 150, "Other", "06/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser@email.com", "foodName", 150, "Grains", "04/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser4@email.com", "foodName", 150, "Meat", "04/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser4@email.com", "foodName", 150, "Dairy", "02/12/2021", "This was a great diet");
    await journal.addOtherNote("Other", "seeduser4@email.com", "To Do1", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser4@email.com", "To Do2", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser4@email.com", "To Do3", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser4@email.com", "To Do4", "I am going to make a resolution.");


    await journal.addWorkoutNote("Workout", "seeduser5@email.com", "exerciseName", "This was a great exercise", 5, 5, "02/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser5@email.com", "exerciseName", "This was a great exercise", 5, 5, "02/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser5@email.com", "exerciseName", "This was a great exercise", 5, 5, "03/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser5@email.com", "exerciseName", "This was a great exercise", 5, 5, "03/12/2021");
    await journal.addDietNote("Diet", "seeduser5@email.com", "foodName", 150, "Vegetables", "04/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser5@email.com", "foodName", 150, "Fruits", "04/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser5@email.com", "foodName", 150, "Other", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser5@email.com", "foodName", 150, "Grains", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser5@email.com", "foodName", 150, "Meat", "06/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser5@email.com", "foodName", 150, "Dairy", "06/12/2021", "This was a great diet");
    await journal.addOtherNote("Other", "seeduser5@email.com", "To Do1", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser5@email.com", "To Do2", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser5@email.com", "To Do3", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser5@email.com", "To Do4", "I am going to make a resolution.");

    await journal.addWorkoutNote("Workout", "seeduser6@email.com", "exerciseName", "This was a great exercise", 5, 5, "08/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser6@email.com", "exerciseName", "This was a great exercise", 5, 5, "08/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser6@email.com", "exerciseName", "This was a great exercise", 5, 5, "09/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser6@email.com", "exerciseName", "This was a great exercise", 5, 5, "09/12/2021");
    await journal.addDietNote("Diet", "seeduser6@email.com", "foodName", 150, "Vegetables", "00/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser6@email.com", "foodName", 150, "Fruits", "00/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser6@email.com", "foodName", 150, "Other", "06/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser6@email.com", "foodName", 150, "Grains", "06/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser6@email.com", "foodName", 150, "Meat", "04/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser6@email.com", "foodName", 150, "Dairy", "04/12/2021", "This was a great diet");
    await journal.addOtherNote("Other", "seeduser6@email.com", "To Do1", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser6@email.com", "To Do2", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser6@email.com", "To Do3", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser6@email.com", "To Do4", "I am going to make a resolution.");


    await journal.addWorkoutNote("Workout", "seeduser7@email.com", "exerciseName", "This was a great exercise", 5, 5, "06/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser7@email.com", "exerciseName", "This was a great exercise", 5, 5, "06/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser7@email.com", "exerciseName", "This was a great exercise", 5, 5, "07/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser7@email.com", "exerciseName", "This was a great exercise", 5, 5, "07/12/2021");
    await journal.addDietNote("Diet", "seeduser7@email.com", "foodName", 150, "Vegetables", "08/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser7@email.com", "foodName", 150, "Fruits", "08/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser7@email.com", "foodName", 150, "Other", "09/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser7@email.com", "foodName", 150, "Grains", "09/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser7@email.com", "foodName", 150, "Meat", "04/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser7@email.com", "foodName", 150, "Dairy", "04/12/2021", "This was a great diet");
    await journal.addOtherNote("Other", "seeduser7@email.com", "To Do1", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser7@email.com", "To Do2", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser7@email.com", "To Do3", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser7@email.com", "To Do4", "I am going to make a resolution.");


    await journal.addWorkoutNote("Workout", "seeduser8@email.com", "exerciseName", "This was a great exercise", 5, 5, "03/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser8@email.com", "exerciseName", "This was a great exercise", 5, 5, "03/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser8@email.com", "exerciseName", "This was a great exercise", 5, 5, "04/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser8@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addDietNote("Diet", "seeduser8@email.com", "foodName", 150, "Vegetables", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser8@email.com", "foodName", 150, "Fruits", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser8@email.com", "foodName", 150, "Other", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser8@email.com", "foodName", 150, "Grains", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser8@email.com", "foodName", 150, "Meat", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser8@email.com", "foodName", 150, "Dairy", "05/12/2021", "This was a great diet");
    await journal.addOtherNote("Other", "seeduser8@email.com", "To Do1", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser8@email.com", "To Do2", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser8@email.com", "To Do3", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser8@email.com", "To Do4", "I am going to make a resolution.");


    await journal.addWorkoutNote("Workout", "seeduser9@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser9@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser9@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser9@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addDietNote("Diet", "seeduser9@email.com", "foodName", 150, "Vegetables", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser9@email.com", "foodName", 150, "Fruits", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser9@email.com", "foodName", 150, "Other", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser9@email.com", "foodName", 150, "Grains", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser9@email.com", "foodName", 150, "Meat", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser9@email.com", "foodName", 150, "Dairy", "05/12/2021", "This was a great diet");
    await journal.addOtherNote("Other", "seeduser9@email.com", "To Do1", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser9@email.com", "To Do2", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser9@email.com", "To Do3", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser9@email.com", "To Do4", "I am going to make a resolution.");


    await journal.addWorkoutNote("Workout", "seeduser10@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser10@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser10@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addWorkoutNote("Workout", "seeduser10@email.com", "exerciseName", "This was a great exercise", 5, 5, "05/12/2021");
    await journal.addDietNote("Diet", "seeduser10@email.com", "foodName", 150, "Vegetables", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser10@email.com", "foodName", 150, "Fruits", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser10@email.com", "foodName", 150, "Other", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser10@email.com", "foodName", 150, "Grains", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser10@email.com", "foodName", 150, "Meat", "05/12/2021", "This was a great diet");
    await journal.addDietNote("Diet", "seeduser10@email.com", "foodName", 150, "Dairy", "05/12/2021", "This was a great diet");
    await journal.addOtherNote("Other", "seeduser10@email.com", "To Do1", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser10@email.com", "To Do2", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser10@email.com", "To Do3", "I am going to make a resolution.");
    await journal.addOtherNote("Other", "seeduser10@email.com", "To Do4", "I am going to make a resolution.");


    
    await db.serverConfig.close();
}

main().catch(console.log); 
