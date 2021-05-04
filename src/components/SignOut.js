import React from 'react';
import { doSignOut } from '../firebase/FirebaseFunctions';

const SignOutButton = () => {
    return (
        <button className="signout-btn" type="button" onClick={doSignOut}>
            Sign Out
        </button>
    );
};

export default SignOutButton;