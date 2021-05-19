import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import AddNoteModal from "./AddNoteModal";

function Social() {
  const [modal, setModal] = useState(false);
  const [PData, setPData] = useState([]);
  const [likedToggle, setLikedToggle] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //   const [deleteToggle, setDeleteToggle] = useState(true);
  const [modalType, setModalType] = useState("");

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
      await axios.post(`/social/${id}`);
      // console.log("You have liked this post with the id of: " +id)
      setLikedToggle(!likedToggle);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`/social/`);
        setPData(data);
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
