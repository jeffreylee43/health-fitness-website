import React, { useState } from 'react';
import '../App.css';
import AddNoteModal from './AddNoteModal';

function Journal() {
    const [modal, setModal] = useState(false);

    const handleCloseModal = () => {
        setModal(false);
    }
    const handleOpenModal = () => {
        setModal(true);
    }
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
    )
}

export default Journal;