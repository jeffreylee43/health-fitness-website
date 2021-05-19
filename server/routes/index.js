const usersRoute = require("./users");
const journalRoutes = require("./journal");
const postsRoutes = require("./social");

const constructorMethod = (app) => {
  app.use("/users", usersRoute);
  app.use("/journal", journalRoutes);
  app.use("/social", postsRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Provided route is not found" });
  });
};

module.exports = constructorMethod;
