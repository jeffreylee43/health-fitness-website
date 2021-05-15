const express = require("express");
const router = express.Router();
const data = require("../data");
const social = data.social;

router.post("/addPost", async (req, res) => {
  let { email, name, subject, postBody } = req.body;
  if (!email || email === "" || email.trim() === "") {
    return res.status(400).json({ error: "You must provide all fields." });
  }
  if (!name || name === "" || name.trim() === "") {
    return res.status(400).json({ error: "You must provide all fields." });
  }
  if (!subject || subject === "" || subject.trim() === "") {
    return res.status(400).json({ error: "You must provide all fields." });
  }
  if (!postBody || postBody === "" || postBody.trim() === "") {
    return res.status(400).json({ error: "You must provide all fields." });
  }

  try {
    const addPost = await social.addPost(email, name, subject, postBody);
    // const getJournal = await journal.getJournal(email);
    // await client.setAsync(`journal${email}`, JSON.stringify(getJournal));
    return res.sendStatus(200);
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

router.get("/:email", async (req, res) => {
  let email = req.params.email;
  if (!email || email === "" || email.trim() === "") {
    return res.status(400).json({ error: "You must provide all fields." });
  }
  try {
    // console.log("went thru");
    const getPost = await social.getPost(email);
    // await client.setAsync(`journal${email}`, JSON.stringify(getJournal));
    return res.send([getPost]);
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

router.get("/", async (req, res) => {
  try {
    var allPosts = await social.getAll();
    res.status(200).send(allPosts);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
