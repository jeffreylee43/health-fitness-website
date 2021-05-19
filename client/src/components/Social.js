import React, {useContext, useState, useEffect} from 'react';
import "../App.css";
import axios from "axios";
import { AuthContext } from '../firebase/Auth';
import AddNoteModal from "./AddNoteModal";

function Social() {
  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [PData, setPData] = useState([]);
  const [likedToggle, setLikedToggle] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //   const [deleteToggle, setDeleteToggle] = useState(true);
  const [modalType, setModalType] = useState("");
  const { currentUser } = useContext(AuthContext);

  const handleCloseModal = () => {
    setModal(false);
    setModalType("");
  };
  const handleOpenModal = (type) => {
    setModalType(type);
    setModal(true);
  };
  const handleLikedPost = async (id) => {
    try {
      await axios.post(`/social/${currentUser.email}/${id}`);
      // console.log("You have liked this post with the id of: " +id)
      if (likedToggle === 0){
        setLikedToggle(1);
      } else {
        setLikedToggle(0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data2 } = await axios.get(`/users/${currentUser.email}`);
        const { data } = await axios.get(`/social/`);
        setPData(data);
        setUserInfo(data2);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, [modal,likedToggle]);

  let items = [];
  //

  if (PData) {
    // items.push(PData);
    // console.log(items);
    items = PData.map((post) => {
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
                    className="post-like"
                    onClick={() => handleLikedPost(post._id)}>Likes: {post.likedCounter}</button> 
                </div>
        </div>
      );
    });
  }

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
        <h1 className="intro-text">Social Media Page</h1>
        <p className="intro-text">Share and discover workout routines!</p>
        <br />
        <button
          className="social-btn-style"
          onClick={() => handleOpenModal("userPost")}
        >
          + Create a post
        </button>
        {modal && modalType && (
          <AddNoteModal
            isOpen={modal}
            handleClose={handleCloseModal}
            modal={modalType}
          />
        )}
        <div className="journal-div-style">
          {items.length === 0 ? <p>No posts created.</p> : items}
        </div>
      </div>
    );
  }
}

export default Social;
