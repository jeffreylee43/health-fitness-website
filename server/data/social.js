const mongoCollections = require("../config/mongoCollections");
const social = mongoCollections.social;
const { ObjectId } = require("mongodb");

module.exports = {
  async addPost(email, name, subject, postBody) {
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
  async getPost(email) {
    if(!email || typeof email !== 'string' || email === "" || email.trim() === "") throw 'The email must be provided';

    const postCollection = await social();
    const foundEmail = await postCollection.findOne({email: email},{sort: {_id: -1}, limit: 1 });
    if(foundEmail === null) throw 'There are no emails with the email address provided.';
    // console.log(foundEmail)
    return foundEmail;
},
async getAll() {
  const postCollection = await social();

  const posts = await postCollection.find({}).toArray();
  return posts;
}
};
