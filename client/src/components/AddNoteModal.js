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
            const addedNote = await axios.post('/journal/addWorkoutNote', {
                email: currentUser.email,
                exerciseName: exerciseName.value,
                comments: comments.value,
                sets: sets.value,
                reps: reps.value,
                date: date.value
            });
            console.log(addedNote);
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
            <form id="add-workout-note" onSubmit={handleAddWorkoutNote}>
                <div>
                    <label htmlFor="exerciseName">Exercise Name:</label>
                    <br/>
                    <input ref={(node)=> {exerciseName=node;}} name="exerciseName" id="exerciseName" type="text" placeholder="Enter the exercise name..." required/>
                </div>
                <div>
                    <label htmlFor="sets">Number of Sets:</label>
                    <br/>
                    <input ref={(node)=> {sets=node;}} name="sets" id="sets" type="number" placeholder="Enter the number of sets..." required/>
                </div>
                <div>
                    <label htmlFor="reps">Number of Reps:</label>
                    <br/>
                    <input ref={(node)=> {reps=node;}} name="reps" id="reps" type="number" placeholder="Enter the number of reps..." required/>
                </div>
                <div>
                    <label htmlFor="date">Date of Exercise Performed:</label>
                    <br/>
                    <input ref={(node)=> {date=node;}} name="date" id="date" type="date" placeholder="Enter the number of date..." required/>
                </div>
                <div>
                    <label htmlFor="comments">Additional comments:</label>
                    <br/>
                    <textarea ref={(node)=> {comments=node;}} className="large-input" name="comments" id="comments" type="text" placeholder="Enter any additional comments..." required/>
                </div>
                <div>
                    <button className="btn-style" type="submit">Add</button>
                </div>
            </form>
        )
    }

    return (
        <div>
            <ReactModal name="addModal" isOpen={modal} contentLabel="Add-Modal">
                {items}
                <button onClick={handleCloseModal}>
                    Cancel
                </button>
            </ReactModal>
        </div>
    )
}

export default AddNoteModal;