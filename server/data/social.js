const mongoCollections = require("../config/mongoCollections");
const social = mongoCollections.social;
const { ObjectId } = require("mongodb");

module.exports = {
  async addPost(email, name, subject, postBody, likedCounter) {
    if (!email || typeof email !== "string")
      throw "You must provide a valid email address";
    if (!name || typeof name !== "string") throw "You must provide valid name";
    if (!subject || typeof subject !== "string")
      throw "You must provide a valid subject";
    if (!postBody || typeof postBody !== "string")
      throw "PostBody must be provided";

    const postCollection = await social();

    let newPost = {
      _id: ObjectId(),
      name: name,
      email: email,
      subject: subject,
      postBody: postBody,
      likedCounter: likedCounter
    };

    const insertPost = await postCollection.insertOne(newPost);
    if (insertPost.insertedCount === 0) throw "Could not create the post.";

    const newId = insertPost.insertedId.toString();
    const getPost = await this.getPostByID(newId);

    return getPost;
  },
  async getPostByID(id) {
    if (!id || typeof id !== "string" || id === "" || id.trim() === "")
      throw "The id must be provided";
    let parsedId = ObjectId(id);

    const postCollection = await social();

    const foundPost = await postCollection.findOne({ _id: parsedId });
    if (foundPost === null) throw "There are no posts with the id provided.";

    const stringId = foundPost._id.toString();
    foundPost._id = stringId;

    return foundPost;
  },
  async getAll() {
    const postCollection = await social();

    const posts = await postCollection.find({}).toArray();
    return posts;
  },
  async getAllByUser(email) {
    const postCollection = await social();

    const posts = await postCollection.find({ email: email }).toArray();
    return posts;
  },
  async updateLike(id){
    if (!id) throw "Error: no ID provided";
    if (typeof id != "string" || id == "")
      throw "Error: ID must be a string and must not be empty";
    if (!id || !ObjectId.isValid(id))
      throw "Error: must provide a valid ID to search for";
    let parsedId = ObjectId(id);
    const postCollection = await social();
    const likedPost = await postCollection.updateOne({ _id: parsedId },{ $inc: { likedCounter: 1} });
    if (likedPost === null) throw "There are no posts with the id provided.";

    

    return likedPost;
  },
  async updateUnlike(id){
    if (!id) throw "Error: no ID provided";
    if (typeof id != "string" || id == "")
      throw "Error: ID must be a string and must not be empty";
    if (!id || !ObjectId.isValid(id))
      throw "Error: must provide a valid ID to search for";
    let parsedId = ObjectId(id);
    const postCollection = await social();
    const likedPost = await postCollection.updateOne({ _id: parsedId },{ $inc: { likedCounter: -1} });
    if (likedPost === null) throw "There are no posts with the id provided.";
    return likedPost;
  },
  async remove(id) {
    if (!id) throw "Error: no ID provided";
    if (typeof id != "string" || id == "")
      throw "Error: ID must be a string and must not be empty";
    if (!id || !ObjectId.isValid(id))
      throw "Error: must provide a valid ID to search for";

    const postCollection = await social();
    let parsedId = ObjectId(id);
    const book = await postCollection.findOne({ _id: parsedId });
    const deletionInfo = await postCollection.removeOne({ _id: parsedId });
    if (deletionInfo.deletedCount === 0)
      throw `Could not find/delete book with id of ${id}`;
    return `success`;
  }
};
