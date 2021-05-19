const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const users = data.users;

const main = async () => {
    const db = await dbConnection();
    await db.dropDatabase();

    /* Create user 1 */
    await users.addNewUser("Alex Smith", "seeduser1@email.com", 36, "male", 60, "beginner");
    
    await db.serverConfig.close();
}

main().catch(console.log); 
