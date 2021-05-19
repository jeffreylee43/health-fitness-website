const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const users = data.users;
const journal = data.journal;
const social = data.social;

const main = async () => {
    const db = await dbConnection();
    await db.dropDatabase();

    /* Create user 1 */
    await users.addNewUser("Alex Smith", "seeduser@email.com", 21, "male", 60, "beginner");
<<<<<<< HEAD
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


=======
    await users.addNewUser("Bob Johnson", "seeduser1@email.com", 20, "male", 60, "advanced");
    await users.addNewUser("Jackie Robinson", "seeduser2@email.com", 20, "male", 51, "beginner");
    await users.addNewUser("Stephen Curry", "seeduser3@email.com", 20, "male", 51, "intermediate");
    await users.addNewUser("Kyrie Irving", "seeduser4@email.com", 20, "male", 51, "beginner");
    await users.addNewUser("Kevin Durant", "seeduser5@email.com", 21, "male", 51, "beginner");
    await users.addNewUser("Jeremy Lin", "seeduser6@email.com", 21, "male", 52, "advanced");
    await users.addNewUser("Shannon Smith", "seeduser7@email.com", 21, "Female", 52, "advanced");
    await users.addNewUser("Megan Rapinoe", "seeduser8@email.com", 22, "Female", 53, "beginner");
    await users.addNewUser("Jasmine Doe", "seeduser9@email.com", 22, "Female", 53, "beginner");
    await users.addNewUser("Sarah Jackson", "seeduser10@email.com", 22, "Female", 53, "beginner");
>>>>>>> cbb2a63f417483c934f31df2611446bf23742fc4
    
    await journal.addWorkoutNote("Workout", "seeduser@email.com", "Pull-Ups", "Next time, do 10 reps per set!", 5, 5, "05/12/2021");
    await journal.addDietNote("Diet", "seeduser@email.com", "Steak", 400, "Meat", "05/12/2021", "Do not eat meat for tomorrow.");
    await journal.addOtherNote("Other", "seeduser@email.com", "Reminder: Go to gym", "Wake up at 8am");

    await journal.addWorkoutNote("Workout", "seeduser1@email.com", "Push-Ups", "Done on May 12, 2021", 4, 10, "05/12/2021");
    await journal.addDietNote("Diet", "seeduser1@email.com", "Carrots", 40, "Vegetables", "04/12/2021", "Noticed carrots helped my mood. Eat more carrots!");
    await journal.addOtherNote("Other", "seeduser1@email.com", "Change workout routine", "Increase reps for each workout starting May 31.");

    await journal.addWorkoutNote("Workout", "seeduser2@email.com", "Sit-Ups", "This is a great exercise. Incorporate to future workouts!", 5, 5, "05/12/2021");
    await journal.addDietNote("Diet", "seeduser2@email.com", "Grapes", 50, "Fruits", "02/12/2021", "Ate 1 cup of grapes");
    await journal.addOtherNote("Other", "seeduser2@email.com", "Buy dumbbells", "Buy 10 lb. dumbbells for next week's workout");

    await journal.addWorkoutNote("Workout", "seeduser3@email.com", "Lat Pulldowns", "First day of doing lat pulldowns at 30 pounds.", 4, 10, "03/12/2021");
    await journal.addDietNote("Diet", "seeduser3@email.com", "Milk", 100, "Dairy", "05/12/2021", "Drank 1 cup of fat-free milk.");
    await journal.addOtherNote("Other", "seeduser3@email.com", "Reminder: Go to gym early", "Starting now, I will go to the gym twice a week");

    await journal.addWorkoutNote("Workout", "seeduser4@email.com", "Planks", "Good exercise for future workouts", 3, 10, "09/12/2021");
    await journal.addDietNote("Diet", "seeduser4@email.com", "Orange", 60, "Fruits", "03/12/2021", "Eat more fruits!");
    await journal.addOtherNote("Other", "seeduser4@email.com", "Buy yoga mat", "Buy yoga mat on Amazon.com for planks");

    await journal.addWorkoutNote("Workout", "seeduser5@email.com", "Squats", "Try a different variation of squats next time", 4, 15, "02/12/2021");
    await journal.addDietNote("Diet", "seeduser5@email.com", "Chips", 150, "Other", "04/12/2021", "Limit chips intake.");
    await journal.addOtherNote("Other", "seeduser5@email.com", "Reminder: Clean equipments", "Before next workout, clean the bench and barbells.");

    await journal.addWorkoutNote("Workout", "seeduser6@email.com", "Chest Press", "Try using a barbell instead of dumbbells next time", 3, 10, "08/12/2021");
    await journal.addDietNote("Diet", "seeduser6@email.com", "Watermelon", 60, "Fruits", "00/12/2021", "More fruits!");
    await journal.addOtherNote("Other", "seeduser6@email.com", "Buy protein supplements", "Start taking protein supplements to build mass");

    await journal.addWorkoutNote("Workout", "seeduser7@email.com", "Push-Ups", "Do 15 pushups per set next time", 5, 10, "06/12/2021");
    await journal.addDietNote("Diet", "seeduser7@email.com", "Chicken", 300, "Meat", "08/12/2021", "Stick with grilled instead of fried chicken");
    await journal.addOtherNote("Other", "seeduser7@email.com", "Increase fruits intake", "From tracking my diet, I need to eat more fruits. Buy more fruits!");

    await journal.addWorkoutNote("Workout", "seeduser8@email.com", "Bicep Curls", "Used dumbbells instead of barbells this time. Feels better!", 3, 10, "03/12/2021");
    await journal.addDietNote("Diet", "seeduser8@email.com", "Bread", 150, "Grains", "05/12/2021", "Cut down on carbs!");
    await journal.addOtherNote("Other", "seeduser8@email.com", "Buy foam roller", "Muscle soreness in recent workouts. Buy foam roller before next workout");

    await journal.addWorkoutNote("Workout", "seeduser9@email.com", "Lunges", "Do it slower next time", 5, 15, "05/12/2021");
    await journal.addDietNote("Diet", "seeduser9@email.com", "Onions", 150, "Vegetables", "05/12/2021", "More vegetables!");
    await journal.addOtherNote("Other", "seeduser9@email.com", "Reminder to go work out", "Go to gym at 7am before work.");

    await journal.addWorkoutNote("Workout", "seeduser10@email.com", "Push-Ups", "Do diamond push-ups next time", 5, 10, "05/12/2021");
    await journal.addDietNote("Diet", "seeduser10@email.com", "Mango", 60, "Fruits", "05/12/2021", "This is a good diet");
    await journal.addOtherNote("Other", "seeduser10@email.com", "Reminder to go to gym", "Go to gym tomorrow in the morning");

    await social.addPost("seeduser@email.com", "Alex Smith", "My Current Workout Routine For Cardio", "Here's my current routine that I recommend to everyone: run on treadmill for 20 minutes, do 10 burpees, and sprint for 3 minutes on treadmill. Do 2 days a week. You'll notice improvement in your cardio!", 13);
    await social.addPost("seeduser3@email.com", "Stephen Curry", "My Diet and Why It's So Good!", "The key to my diet is eating a lot of vegetables. I try getting at least 4 servings of any kind of vegetables everyday. It helps me stay awake and feel healthy as I train for the NBA season. Also, drink a lot of water. If you follow this, you will generally feel better and be more healthy!", 5);
    await social.addPost("seeduser5@email.com", "Kevin Durant", "What I Found Out", "Recently, I found out how important diet is. Don't eat junk food and eat as much healthy food as you can. But also treat yourself with a delicious meal from time to time!", 0);
    await social.addPost("seeduser1@email.com", "Bob Johnson", "New Gym", "Hey guys! I just figured out there is a new gym in town and it looks amazing. There is a large swimming pool and they have all the equipment you can think of. Went there today and highly recommend everyone to try this gym out!", 3);
    await social.addPost("seeduser2@email.com", "Jackie Robinson", "Research Shows Protein Shakes Are Worth It!", "I just came upon an article that shows that protein shakes are very good for building muscle. I never knew this! I just want everyone to know that protein shakes are great and a good supplement to your workout, especially if you are trying to gain muscle!", 2);
    await social.addPost("seeduser7@email.com", "Shannon Smith", "Foam Rollers", "I recently started working out and I felt a lot of muscle soreness after workouts. Someone told me about foam rollers and I bought one! It is amazing in relieving tension in the muscles. It's a life saver. I recommend everyone who sees this post try to use foam roller after workouts!", 0);
    await social.addPost("seeduser10@email.com", "Sarah Jackson", "Awesome Workout Routine", "I recently tried out a new workout routine and I have seen a lot of progress using this. The routine is doing 3 sets of 10 pushups. Then, perform 4 sets of 10 chest presses. Finally, end the workout with a 10-minute run on the treadmill. I noticed that I gained a lot of strength and I recommend others to try this!", 8);
    await social.addPost("seeduser6@email.com", "Jeremy Lin", "Diet Cheat", "Do you sometimes feel hungry and eat more than you should? My tip is to eat a good breakfast with proteins. Drink a lot of water throughout the day. If you prefer to have snacks, try to limit your snacks to healthy options like fruits instead of chips.", 7);


    await db.serverConfig.close();
}

main().catch(console.log); 
