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

const Home = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [PData, setPData] = useState([]);
  const [LPData, setLPData] = useState([]);
  const [deleteToggle, setDeleteToggle] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleDeleteNote = async (id) => {
    try { 
      await axios.delete(`/social/${id}`);
      setDeleteToggle(!deleteToggle);
    } catch (e) {
      console.log(e);
    }
  };
  const handleDeleteLikedPost = async (id) => {
    try { 
      await axios.post(`/social/${currentUser.email}/${id}`);
      setDeleteToggle(!deleteToggle);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`/users/${currentUser.email}`);
        const dataUser = await axios.get(`/social/${currentUser.email}`);
        const dataUser2 = await axios.get(`/social/liked/${currentUser.email}`);
        setLPData(dataUser2.data);
        setPData(dataUser.data);
        setUserInfo(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, [deleteToggle]);

  let items = [];

  if (loading) {
    return (
      <div className="intro-text">
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="intro-text">
        <p>Error</p>
      </div>
    );
  } else {
    return (
    <div>
        <div className="headerProfile">
        <h1 className="intro-text">Profile</h1>
        </div>
      <div className="profile-div">
            <h2>{userInfo.name}</h2>
            <img className="proImage" src="https://www.drshaneholmes.com/wp-content/uploads/2020/03/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt={userInfo.profilepic}></img>
        <ul className="profile-list">
          <li>
            <span className="desc-style">Email</span>: {userInfo.email}
          </li>
          <li>
            <span className="desc-style">Age</span>: {userInfo.age}
          </li>
          <li>
            <span className="desc-style">Gender</span>: {userInfo.gender}
          </li>
          <li>
            <span className="desc-style">Height</span>: {userInfo.height} in.
          </li>
          <li>
            <span className="desc-style">Skill</span>: {userInfo.skill}
          </li>
        </ul>
        <br />
        <br />
        </div>
        <div className="postList">
            <h2>Your posts: </h2>
            {
            (items = PData.map((post) => {
                return (
                <div className="note-style" key={post._id}>
                    <div className="col-note" id={post._id}>
                    <h2 className="note-subject">{post.name}</h2>
                    <p>
                        <span className="desc-style">Subject</span>: {post.subject}
                    </p>
                    <p>
                        <span className="desc-style">Post</span>: {post.postBody}
                    </p>
                    </div>
                    <div className="col-delete">
                    <button
                        className="journal-delete"
                        onClick={() => handleDeleteNote(post._id)}
                    >
                        Delete
                    </button>
                    </div>
                </div>
                );
            }))
            }
                <div className="journal-div-style">
                    {items.length === 0 ? <p>No posts have been made.</p>: ""}
                </div>
            
                <h2>Liked posts: </h2>
                {
                (items = LPData.map((post) => {
                    return (
                    <div className="note-style" key={post._id}>
                        <div className="col-note" id={post._id}>
                        <h2 className="note-subject">{post.name}</h2>
                        <p>
                            <span className="desc-style">Subject</span>: {post.subject}
                        </p>
                        <p>
                            <span className="desc-style">Post</span>: {post.postBody}
                        </p>
                        </div>
                        <div className="col-delete">
                        <button
                            className="journal-delete"
                            onClick={() => handleDeleteLikedPost(post._id)}
                        >
                            Unlike
                        </button>
                        </div>
                    </div>
                    );
                }))
                }
                <div className="journal-div-style">
                    {items.length === 0 ? <p>Like a post to save it here!</p>: ""}
                </div>
        </div>
    </div>
    );
  }
};

export default Home;
