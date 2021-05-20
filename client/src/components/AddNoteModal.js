import React, { useContext, useState } from "react";
import "../App.css";
import ReactModal from "react-modal";
import axios from "axios";
import { AuthContext } from "../firebase/Auth";

ReactModal.setAppElement("#root");

function AddNoteModal(props) {
  const [modal, setModal] = useState(props.isOpen);
  let items = null;
  const { currentUser } = useContext(AuthContext);

  const handleAddWorkoutNote = async (e) => {
    e.preventDefault();
    const { exerciseName, comments, sets, reps, date } = e.target.elements;
    try {
      await axios.post("/journal/addWorkoutNote", {
        subject: "Workout",
        email: currentUser.email,
        exerciseName: exerciseName.value,
        comments: comments.value,
        sets: sets.value,
        reps: reps.value,
        date: date.value,
      });
      props.handleClose();
    } catch (e) {
      console.log(e);
      props.handleClose();
    }
  };

  const handleAddDietNote = async (e) => {
    e.preventDefault();
    const { foodName, calories, foodType, date, comments } = e.target.elements;
    try {
      await axios.post("/journal/addDietNote", {
        subject: "Diet",
        email: currentUser.email,
        foodName: foodName.value,
        calories: calories.value,
        foodType: foodType.value,
        date: date.value,
        comments: comments.value,
      });
      props.handleClose();
    } catch (e) {
      console.log(e);
      props.handleClose();
    }
  };

  const handleAddOtherNote = async (e) => {
    e.preventDefault();
    const { titleSubject, comments } = e.target.elements;
    try {
      await axios.post("/journal/addOtherNote", {
        subject: "Other",
        email: currentUser.email,
        titleSubject: titleSubject.value,
        comments: comments.value,
      });
      props.handleClose();
    } catch (e) {
      console.log(e);
      props.handleClose();
    }
  };
  const handleAddPost = async (e) => {
    e.preventDefault();
    const { titleSubject, post } = e.target.elements;
    let getName = await axios.get(`/users/${currentUser.email}`);
    let userName = getName.data.name;
    try {
      await axios.post("/social/addPost", {
        name: userName,
        email: currentUser.email,
        subject: titleSubject.value,
        postBody: post.value,
        likedCounter: 0
      });
      props.handleClose();
    } catch (e) {
      console.log(e);
      props.handleClose();
    }
  };

  const handleCloseModal = () => {
    setModal(true);
    props.handleClose(false);
  };

  if (props.modal === "workoutNote") {
    items = (
      <>
        <h2 className="modal-title">Add Workout Note</h2>
        <form id="add-workout-note" onSubmit={handleAddWorkoutNote}>
          <div className="input-style">
            <label htmlFor="exerciseName">Exercise Name:</label>
            <br />
            <input
              name="exerciseName"
              id="exerciseName"
              type="text"
              placeholder="Enter the exercise name..."
              required
            />
          </div>
          <div className="input-style">
            <label htmlFor="sets">Number of Sets:</label>
            <br />
            <input
              name="sets"
              id="sets"
              type="number"
              placeholder="Enter the number of sets..."
              required
            />
          </div>
          <div className="input-style">
            <label htmlFor="reps">Number of Reps:</label>
            <br />
            <input
              name="reps"
              id="reps"
              type="number"
              placeholder="Enter the number of reps..."
              required
            />
          </div>
          <div className="input-style">
            <label htmlFor="date">Date of Exercise Performed:</label>
            <br />
            <input
              name="date"
              id="date"
              type="date"
              required
            />
          </div>
          <div className="input-style">
            <label htmlFor="comments">Additional comments:</label>
            <br />
            <textarea
              className="large-input"
              name="comments"
              id="comments"
              placeholder="Enter any additional comments..."
              required
            />
          </div>
          <div className="input-style">
            <button className="btn-style" type="submit">
              Add
            </button>
          </div>
        </form>
      </>
    );
  }

  if (props.modal === "dietNote") {
    items = (
      <>
        <h2 className="modal-title">Add Diet Note</h2>
        <form id="add-diet-note" onSubmit={handleAddDietNote}>
          <div className="input-style">
            <label htmlFor="foodName">Food Name:</label>
            <br />
            <input
              name="foodName"
              id="foodName"
              type="text"
              placeholder="Enter the food name you ate..."
              required
            />
          </div>
          <div className="input-style">
            <label htmlFor="foodType">
              Choose the food type:
              <select name="foodType" id="foodType">
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Grains">Grains</option>
                <option value="Meat">Meat</option>
                <option value="Dairy">Dairy</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <div className="input-style">
            <label htmlFor="calories">Calories:</label>
            <br />
            <input
              name="calories"
              id="calories"
              type="number"
              min="0"
              placeholder="Enter the total calories of the food..."
              required
            />
          </div>
          <div className="input-style">
            <label htmlFor="date">Date of Food Eaten:</label>
            <br />
            <input
              name="date"
              id="date"
              type="date"
              required
            />
          </div>
          <div className="input-style">
            <label htmlFor="comments">Additional comments:</label>
            <br />
            <textarea
              className="large-input"
              name="comments"
              id="comments"
              placeholder="Enter any additional comments..."
              required
            />
          </div>
          <div className="input-style">
            <button className="btn-style" type="submit">
              Add
            </button>
          </div>
        </form>
      </>
    );
  }

  if (props.modal === "otherNote") {
    items = (
      <>
        <h2 className="modal-title">Add Other Note</h2>
        <form id="add-other-note" onSubmit={handleAddOtherNote}>
          <div className="input-style">
            <label htmlFor="titleSubject">Subject:</label>
            <br />
            <input
              name="titleSubject"
              id="titleSubject"
              type="text"
              placeholder="Enter the subject of this note..."
              required
            />
          </div>
          <div className="input-style">
            <label htmlFor="comments">Comments:</label>
            <br />
            <textarea
              className="large-input"
              name="comments"
              id="comments"
              placeholder="Enter the desired comments..."
              required
            />
          </div>
          <div className="input-style">
            <button className="btn-style" type="submit">
              Add
            </button>
          </div>
        </form>
      </>
    );
  }
  if (props.modal === "userPost") {
    items = (
      <>
        <h2 className="modal-title">Create a Post</h2>
        <form id="add-other-note" onSubmit={handleAddPost}>
          <div className="input-style">
            <label htmlFor="titleSubject">Subject:</label>
            <br />
            <input
              className="subject-input"
              name="titleSubject"
              id="titleSubject"
              type="text"
              placeholder="Enter the subject of this post..."
              required
            />
          </div>
          <div className="input-style">
            <label htmlFor="post">Post:</label>
            <br />
            <textarea
              className="large-input"
              name="post"
              id="post"
              placeholder="Enter your post here..."
              required
            />
          </div>
          <div className="input-style">
            <button className="btn-style" type="submit">
              Add
            </button>
          </div>
        </form>
      </>
    );
  }
  return (
    <div>
      <ReactModal name="addModal" isOpen={modal} contentLabel="Add-Modal">
        {items}
        <button className="modal-cancel" onClick={handleCloseModal}>
          Cancel
        </button>
      </ReactModal>
    </div>
  );
}

export default AddNoteModal;
