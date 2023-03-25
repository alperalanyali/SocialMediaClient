import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import PostModal from "./PostModal";
import axios from "axios";

const Home = () => {
  const posts = [
    {
      id: "1",
      title: "Deneme 1",
      content: "Deneme içerik",
    },
    {
      id: "2",
      title: "Deneme 2",
      content: "Deneme içerik 2",
    },
    {
      id: "3",
      title: "Deneme 3",
      content: "Deneme içerik 3",
    },
    {
        id: "1",
        title: "Deneme 1",
        content: "Deneme içerik",
      },
      {
        id: "2",
        title: "Deneme 2",
        content: "Deneme içerik 2",
      },
      {
        id: "3",
        title: "Deneme 3",
        content: "Deneme içerik 3",
      },
      {
        id: "1",
        title: "Deneme 1",
        content: "Deneme içerik",
      },
      {
        id: "2",
        title: "Deneme 2",
        content: "Deneme içerik 2",
      },
      {
        id: "3",
        title: "Deneme 3",
        content: "Deneme içerik 3",
      },
  ];
  const navigate = useNavigate();
  const goToProfile = ()=>{
    navigate('/profile')
  }
  return (
    <>
      <div style={{ marginTop: "20px", marginLeft: "5%", marginRight: "5%" }}>
        <div className="row">
          <div className="col-md-3 ">
            <div className="text-center card-div">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdQArnvrchduwBUmj2T3rjla4bX5kQTx1TYd7IlEgUg&s"
                className="profile-img"
                onClick={goToProfile}
              />
              <h4 className="mt-4 mb-4">Alper ALANYALI</h4>
              <h5 className="text-muted">Full Stack Developer</h5>
            </div>
    
          </div>
          <div className="col-md-9">
            <div className="card-div mb-4">
              <div className="row p-1">
                <div className="col-md-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdQArnvrchduwBUmj2T3rjla4bX5kQTx1TYd7IlEgUg&s"
                    className="profile-avatar"
                  />                 
                </div>
                <div className="col-md-10 ">
                        <div className="card-div2">
                               <span data-bs-toggle="modal" data-bs-target="#postAddModal">
                                    Start a post
                               </span>
                        </div>
                  </div>
              </div>
            </div>
            <hr></hr>
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="card-div mx-4"
                  style={{ marginBottom: "30px" }}
                >
                  <div className="row mb-4 mx-1">
                    <div className="col-md-1">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdQArnvrchduwBUmj2T3rjla4bX5kQTx1TYd7IlEgUg&s"
                        className="profile-avatar"
                      />
                    </div>
                    <div className="col-md-8">
                      <span className="mx-2">Alper ALANYALI</span>
                      <span className="mx-2">Full Stack Developer</span>
                 
                    </div>
                    <div className="col-md-2">
                        <span className="text-end">10.03.2023 08:30</span>
                    </div>
                  </div>
                  <div>
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <PostModal/>
    </>
  );
};

export default Home;
