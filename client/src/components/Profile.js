import React, {useContext, useState, useEffect} from 'react';
import '../App.css';
import { AuthContext } from '../firebase/Auth';
import axios from 'axios';
import pro1  from "../img/pro1.jpg";
import pro2  from "../img/pro2.jpg";
import pro3  from "../img/pro3.jpg";
import pro4  from "../img/pro4.jpg";
import pro5  from "../img/pro5.jpg";
import pro6  from "../img/pro6.jpg";
const im = require('imagemagick');

const Home = () =>{
    let items = null;
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {currentUser} = useContext(AuthContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const {data} = await axios.get(`/users/${currentUser.email}`);
                setUserInfo(data);
                setLoading(false);
            } catch(e) {
                console.log(e);
                setError(true);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if(loading) {
        return (
            <div className="intro-text">
                <p>Loading...</p>
            </div>
        )
    } if(error) {
        return(
            <div className="intro-text">
                <p>Error</p>
            </div>
        );
    }
    else {
        return(
            <div className="profile-div"> 
                <h1 className="intro-text">Profile</h1>
                <ul className="profile-list">
                <img className="proImage" src= {pro5} alt={userInfo.profilepic}></img>
                    <li><span className="desc-style">Name</span>: {userInfo.name}</li>
                    <li><span className="desc-style">Email</span>: {userInfo.email}</li>
                    <li><span className="desc-style">Age</span>: {userInfo.age}</li>
                    <li><span className="desc-style">Gender</span>: {userInfo.gender}</li>
                    <li><span className="desc-style">Height</span>: {userInfo.height} in.</li>
                    <li><span className="desc-style">Skill</span>: {userInfo.skill}</li>
                </ul>
            </div>
        )
    }
}

export default Home;