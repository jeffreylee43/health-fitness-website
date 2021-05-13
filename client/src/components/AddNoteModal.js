import React, {useContext, useState} from 'react';
import '../App.css';
import ReactModal from 'react-modal';
import axios from 'axios';
import { AuthContext } from '../firebase/Auth';

ReactModal.setAppElement('#root');

function AddNoteModal(props) {
    const [modal, setModal] = useState(props.isOpen);
    let items = null;
    const {currentUser} = useContext(AuthContext);

    const handleAddWorkoutNote = async (e) => {
        e.preventDefault();
        const { exerciseName, comments, sets, reps, date } = e.target.elements;
        try {
            const addedWorkoutNote = await axios.post('/journal/addWorkoutNote', {
                subject: "Workout",
                email: currentUser.email,
                exerciseName: exerciseName.value,
                comments: comments.value,
                sets: sets.value,
                reps: reps.value,
                date: date.value
            });
            props.handleClose();
        } catch(e) {
            console.log(e);
            props.handleClose();
        }
    }

    const handleAddDietNote = async (e) => {
        e.preventDefault();
        const { foodName, calories, foodType, date, comments } = e.target.elements;
        try {
            const addedDietNote = await axios.post('/journal/addDietNote', {
                subject: "Diet",
                email: currentUser.email,
                foodName: foodName.value,
                calories: calories.value,
                foodType: foodType.value,
                date: date.value,
                comments: comments.value
            });
            props.handleClose();
        } catch(e) {
            console.log(e);
            props.handleClose();
        }
    }

    const handleAddOtherNote = async (e) => {
        e.preventDefault();
        const { titleSubject, comments } = e.target.elements;
        try {
            const addedOtherNote = await axios.post('/journal/addOtherNote', {
                subject: "Other",
                email: currentUser.email,
                titleSubject: titleSubject.value,
                comments: comments.value
            });
            props.handleClose();
        } catch(e) {
            console.log(e);
            props.handleClose();
        }
    }

    const handleCloseModal = () => {
        setModal(true);
        props.handleClose(false);
    }

    if(props.modal === 'workoutNote') {
        let exerciseName;
        let comments;
        let sets;
        let reps;
        let date;
        items = (
            <>
            <h2 className="modal-title">Add Workout Note</h2>
            <form id="add-workout-note" onSubmit={handleAddWorkoutNote}>
                <div className="input-style">
                    <label htmlFor="exerciseName">Exercise Name:</label>
                    <br/>
                    <input ref={(node)=> {exerciseName=node;}} name="exerciseName" id="exerciseName" type="text" placeholder="Enter the exercise name..." required/>
                </div>
                <div className="input-style">
                    <label htmlFor="sets">Number of Sets:</label>
                    <br/>
                    <input ref={(node)=> {sets=node;}} name="sets" id="sets" type="number" placeholder="Enter the number of sets..." required/>
                </div>
                <div className="input-style">
                    <label htmlFor="reps">Number of Reps:</label>
                    <br/>
                    <input ref={(node)=> {reps=node;}} name="reps" id="reps" type="number" placeholder="Enter the number of reps..." required/>
                </div>
                <div className="input-style">
                    <label htmlFor="date">Date of Exercise Performed:</label>
                    <br/>
                    <input ref={(node)=> {date=node;}} name="date" id="date" type="date" placeholder="Enter the date of when you performed this exercise..." required/>
                </div>
                <div className="input-style">
                    <label htmlFor="comments">Additional comments:</label>
                    <br/>
                    <textarea ref={(node)=> {comments=node;}} className="large-input" name="comments" id="comments" type="text" placeholder="Enter any additional comments..." required/>
                </div>
                <div className="input-style">
                    <button className="btn-style" type="submit">Add</button>
                </div>
            </form>
            </>
        )
    }

    if(props.modal === 'dietNote') {
        let foodName;
        let calories;
        let foodType;
        let date;
        let comments;
        items = (
            <>
            <h2 className="modal-title">Add Diet Note</h2>
            <form id="add-diet-note" onSubmit={handleAddDietNote}>
                <div className="input-style">
                    <label htmlFor="foodName">Food Name:</label>
                    <br/>
                    <input ref={(node)=> {foodName=node;}} name="foodName" id="foodName" type="text" placeholder="Enter the food name you ate..." required/>
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
                    <br/>
                    <input ref={(node)=> {calories=node;}} name="calories" id="calories" type="number" min="0" placeholder="Enter the total calories of the food..." required/>
                </div>
                <div className="input-style">
                    <label htmlFor="date">Date of Food Eaten:</label>
                    <br/>
                    <input ref={(node)=> {date=node;}} name="date" id="date" type="date" placeholder="Enter the date of when you ate this food..." required/>
                </div>
                <div className="input-style">
                    <label htmlFor="comments">Additional comments:</label>
                    <br/>
                    <textarea ref={(node)=> {comments=node;}} className="large-input" name="comments" id="comments" type="text" placeholder="Enter any additional comments..." required/>
                </div>
                <div className="input-style">
                    <button className="btn-style" type="submit">Add</button>
                </div>
            </form>
            </>
        )
    }

    if(props.modal === 'otherNote') {
        let titleSubject;
        let comments;
        items = (
            <>
            <h2 className="modal-title">Add Other Note</h2>
            <form id="add-other-note" onSubmit={handleAddOtherNote}>
                <div className="input-style">
                    <label htmlFor="titleSubject">Subject:</label>
                    <br/>
                    <input ref={(node)=> {titleSubject=node;}} name="titleSubject" id="titleSubject" type="text" placeholder="Enter the subject of this note..." required/>
                </div>
                <div className="input-style">
                    <label htmlFor="comments">Comments:</label>
                    <br/>
                    <textarea ref={(node)=> {comments=node;}} className="large-input" name="comments" id="comments" type="text" placeholder="Enter the desired comments..." required/>
                </div>
                <div className="input-style">
                    <button className="btn-style" type="submit">Add</button>
                </div>
            </form>
            </>
        )
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
    )
}

export default AddNoteModal;