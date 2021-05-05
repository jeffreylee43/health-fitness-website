import React, { useContext } from 'react';
import '../App.css'
import SocialSignIn from './SocialSignIn';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../firebase/Auth';
import { doSignInWithEmailAndPassword, doPasswordReset } from '../firebase/FirebaseFunctions';

function Login() {
    const {currentUser} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        let { email, password } = e.target.elements;
    
        try {
            await doSignInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            alert(error);
        }
    };

    const passwordReset = (event) => {
        event.preventDefault();
        let email = document.getElementById('email').value;
        if (email) {
            doPasswordReset(email);
            alert('Password reset email was sent');
        } else {
            alert('Please enter an email address above before you click the forgot password link');
        }
    }

    if(currentUser) {
        return <Redirect to="/home"/>
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit = {handleLogin}>
                <div>
                    <label>
                        Email:
                        <input name="email" id="email" type="email" placeholder="Enter your email address" required/>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input name="password" type="password" placeholder="Enter your password" required/>
                    </label>
                </div>
                <div>
                    <button className="btn-style" type="submit">Login</button>
                </div>

                {/* <div>
                    <button className="forgot-btn" onClick={passwordReset}>
                        Forgot Password?
                    </button>
                </div> */}
                
            </form>
            <br/>
            <SocialSignIn />
        </div>
    )
}

export default Login;