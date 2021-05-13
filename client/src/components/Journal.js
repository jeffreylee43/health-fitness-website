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
    const [deleteToggle, setDeleteToggle] = useState(true);
    const {currentUser} = useContext(AuthContext);
    const [modalType, setModalType] = useState("");

    const handleCloseModal = () => {
        setModal(false);
        setModalType("");
    }
    const handleOpenModal = (type) => {
        setModalType(type);
        setModal(true);
    }
    const handleDeleteNote = async (email, id) => {
        try {
            const deletedNote = await axios.delete(`/journal/deleteNote/${email}/${id}`);
            setDeleteToggle(!deleteToggle);
        } catch(e) {
            console.log(e);
        }
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
    }, [modal, deleteToggle]);

    if(jData) {
        items = jData.map((note)=> {
            if(note.subject === "Workout") {
                return (
                    <div className="note-style" key={note._id}>
                        <div className="col-note" id={note._id}>
                            <h3 className="note-subject">{note.subject}</h3>
                            <p><span className="desc-style">Exercise Name</span>: {note.exerciseName}</p>
                            <p><span className="desc-style">Number of sets</span>: {note.sets}</p>
                            <p><span className="desc-style">Number of reps</span>: {note.reps}</p>
                            <p><span className="desc-style">Date</span>: {note.date}</p>
                            <p><span className="desc-style">Comments</span>: {note.comments}</p>
                        </div>
                        <div className="col-delete">
                            <button className="journal-delete" onClick={() => handleDeleteNote(currentUser.email, note._id)}>Delete</button>
                        </div>
                    </div>
                )
            }
            if(note.subject === "Diet") {
                return (
                    <div className="note-style" key={note._id}>
                        <div className="col-note" id={note._id}>
                            <h3 className="note-subject">{note.subject}</h3>
                            <p><span className="desc-style">Food Name</span>: {note.foodName}</p>
                            <p><span className="desc-style">Food Type</span>: {note.foodType}</p>
                            <p><span className="desc-style">Calories</span>: {note.calories}</p>
                            <p><span className="desc-style">Date</span>: {note.date}</p>
                            <p><span className="desc-style">Comments</span>: {note.comments}</p>
                        </div>
                        <div className="col-delete">
                            <button className="journal-delete" onClick={() => handleDeleteNote(currentUser.email, note._id)}>Delete</button>
                        </div>
                    </div>
                )
            } 
            if(note.subject === "Other") {
                return (
                    <div className="note-style" key={note._id}>
                        <div className="col-note" id={note._id}>
                            <h3 className="note-subject">{note.subject}</h3>
                            <p><span className="desc-style">Subject</span>: {note.titleSubject}</p>
                            <p><span className="desc-style">Comments</span>: {note.comments}</p>
                        </div>
                        <div className="col-delete">
                            <button className="journal-delete" onClick={() => handleDeleteNote(currentUser.email, note._id)}>Delete</button>
                        </div>
                    </div>
                )
            } 
            else {
                return (
                    <div className="note-style" key={note._id}>
                        Note with unknown subject
                    </div>
                )
            }
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
                <p className="intro-text">Use this personal journal to stay organized with your workout, diet, and other needs!</p>
                <div className="btn-group">
                    <div className="btn-div">
                        <button className="journal-btn-style" onClick={()=>handleOpenModal("workoutNote")}>+ Add Workout Note</button>
                    </div> 
                    <div className="btn-div">
                        <button className="journal-btn-style" onClick={()=>handleOpenModal("dietNote")}>+ Add Diet Note</button>
                    </div> 
                    <div className="btn-div">
                        <button className="journal-btn-style" onClick={()=>handleOpenModal("otherNote")}>+ Add Other Note</button>
                    </div> 
                </div>

                {modal && modalType && (
                    <AddNoteModal isOpen={modal} handleClose={handleCloseModal} modal={modalType}/>
                )}
                <div className="journal-div-style">
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