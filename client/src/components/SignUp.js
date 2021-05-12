import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../firebase/FirebaseFunctions';
import { AuthContext } from '../firebase/Auth';
import axios from 'axios';

function SignUp() {
    const {currentUser} = useContext(AuthContext);
    const [pwMatch, setPwMatch] = useState('');
    const handleSignUp = async (e) => {
        e.preventDefault();
        const { displayName, email, passwordOne, passwordTwo, age, gender, height, skill } = e.target.elements;
        if (passwordOne.value !== passwordTwo.value) {
            setPwMatch('Passwords do not match');
            return false;
        }
        try {
            await doCreateUserWithEmailAndPassword(email.value, passwordOne.value, displayName);
            const postReturn = await axios.post('/users', {
                name: displayName.value,
                email: email.value,
                // password: passwordTwo.value,
                age: age.value,
                gender: gender.value,
                height: height.value,
                skill: skill.value
            });
        } catch (error) {
            alert(error);
        }
    };
        
    if(currentUser) {
        return <Redirect to="/home"/>
    }
    return (
    <div>
        <h1>Sign Up</h1>
        {pwMatch && <h4 className="error">{pwMatch}</h4>}
        <form onSubmit={handleSignUp}>
            <div>
                <label>
                    Name:
                    <input name="displayName" type="text" placeholder="Name" required/>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input name="email" type="email" placeholder="Email" required/>
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input id="passwordOne" name="passwordOne" type="password" placeholder="Password" required/>
                </label>
            </div>
            <div>
                <label>
                    Confirm Password:
                    <input name="passwordTwo" type="password" placeholder="Confirm Password" required/>
                </label>
            </div>
            <div>
                <label>
                    Enter Age:
                    <input name="age" type="number" min="10" max="100" placeholder="Age" required/>
                </label>
            </div>
            <div>
                <label htmlFor="gender">
                    Choose a Gender:
                    <select name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Enter your height (in inches):
                    <input name="height" type="number" min="36" max="100" placeholder="Height" required/>
                    in.
                </label>
            </div>
            <div>
                <label htmlFor="skill">
                    Choose a skill level:
                    <select name="skill" id="skill">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </label>
            </div>
            <button className="btn-style" id="submitButton" name="submitButton" type="submit">
                Sign Up
            </button>
        </form>
    </div>
    )
}

export default SignUp;