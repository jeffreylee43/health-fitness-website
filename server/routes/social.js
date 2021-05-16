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
    const getPosts = await social.getAllByUser(email);
    return res.send(getPosts);
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

router.delete("/:id", async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ error: "You must Supply and ID to delete" });
    return;
  }
  try {
    await social.getPostByID(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Post not found" });
    return;
  }
  try {
    await social.remove(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
