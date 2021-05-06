import React from 'react';
import { doSocialSignIn } from '../firebase/FirebaseFunctions';

const SocialSignIn = () => {
    const socialSignOn = async (provider) => {
        try {
            await doSocialSignIn(provider);
        } catch (error) {
            alert(error);
        }
    };
    return (
        <div>
            <img onClick={() => socialSignOn('google')} alt="google signin" src="../img/google.png"/>
            <img onClick={() => socialSignOn('facebook')} alt="google signin" src="../img/facebook.png"/>
        </div>
    );
};

export default SocialSignIn;