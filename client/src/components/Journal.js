import React, { useContext, useState, useEffect } from 'react';
import '../App.css';
import AddNoteModal from './AddNoteModal';
import { AuthContext } from '../firebase/Auth';
import axios from 'axios';

function Journal() {
    const [modal, setModal] = useState(false);
    const [jData, setJData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {currentUser} = useContext(AuthContext);

    const handleCloseModal = () => {
        setModal(false);
    }
    const handleOpenModal = () => {
        setModal(true);
    }
    let items=[];

    useEffect(() => {
        async function fetchData() {
            try {
                const {data} = await axios.get(`/journal/${currentUser.email}`);
                setJData(data);
                setLoading(false);
            } catch(e) {
                console.log(e);
                setError(true);
                setLoading(false);
            }
        }
        fetchData();
    }, [modal]);

    if(jData) {
        items = jData.map((note)=> {
            return (
                <div className="note-style" key={note._id}>
                    <p>Exercise Name: {note.exerciseName}</p>
                    <p>Number of sets: {note.sets}</p>
                    <p>Number of reps: {note.reps}</p>
                    <p>Date: {note.date}</p>
                </div>
            )
        });
    } if(loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } if(error) {
        return(
            <div>
                <p>Error</p>
            </div>
        );
    } else {
        return (
            <div>
                <h1 className="intro-text">Personal Journal</h1>
                <div className="btn-group">
                    <div className="btn-div">
                        <button className="journal-btn-style" onClick={handleOpenModal}>+ Add Workout Note</button>
                    </div> 
                    <div className="btn-div">
                        <button className="journal-btn-style">+ Add Diet Note</button>
                    </div> 
                    <div className="btn-div">
                        <button className="journal-btn-style">+ Add Other Note</button>
                    </div> 
                </div>

                {modal && (
                    <AddNoteModal isOpen={modal} handleClose={handleCloseModal} modal="workoutNote"/>
                )}
                <div>
                    {items.length === 0 ? <p>No notes in journal</p>: items}
                </div>
                {/* <form>
                    <div>
                        <p>Add a note to your journal:</p>
                        <label htmlFor="subject">Choose a Subject:</label>
                        <br/>
                        <select name="subject" id="subject">
                            <option value="workout">Workout</option>
                            <option value="diet">Diet</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="text">Description:</label>
                        <br/>    
                        <textarea className="large-input" name="text" type="text" placeholder="Enter description for note" required/>
                    </div>
                    <div>
                        <button className="btn-style" type="submit">Login</button>
                    </div>        
                </form> */}
            </div>
    )}
}

export default Journal;