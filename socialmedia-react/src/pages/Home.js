import { API_URL, FILE_URL } from "../commons/constants";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import PostModal from "./PostModal";
import getUserInfo from "../commons/services/getUserInfo";
import requestApi from "../commons/services/api-service";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile");
  };
  const getPosts = () => {
    requestApi("get", "/post/getAll", null, (res) => {
      setPosts(res.data);
      console.log(posts);
    });
  };
  useEffect(() => {
    getUserInfo((res) => {
      setUserInfo(res);
    });
    getPosts();
  }, []);

  const showComment = (index) => {
    let element = document.getElementById("div-" + index);
    element.style = "";
  };

  const sendComment = async (postId, index) => {
    console.log(postId);
    let comment = document.getElementById("text-" + index);
    console.log(comment.value);
    let model = {
      userId: userInfo._id,
      commentUserId: comment.value,
      postId: postId,
    };
    await requestApi("post", "/comment/create", model, (res) => {
      console.log(res);
    });
  };
  const likeOrUnlike = async (postId) => {
    debugger;
    let model = { userId:userInfo._id, postId: postId };
    await requestApi('post', "/likes/likeOrUnlike", model,(res)=>{
      console.log(res)
    });
}
  return (
    <>
      <div style={{ marginTop: "20px", marginLeft: "5%", marginRight: "5%" }}>
        <div className="row">
          <div className="col-md-3 ">
            <div className="text-center card-div">
              <img
                src={FILE_URL + userInfo?.avatar}
                className="profile-img"
                onClick={goToProfile}
              />
              <h4 className="mt-4 mb-4">{userInfo?.fullName}</h4>
              <h5 className="text-muted">{userInfo?.profession}</h5>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card-div mb-4">
              <div className="row p-1">
                <div className="col-md-2">
                  <img
                    src={FILE_URL + "" + userInfo?.avatar}
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
            {posts.map((post, index) => {
              return (
                <div
                  key={index}
                  className="card-div mx-4"
                  style={{ marginBottom: "30px" }}
                >
                  <div className="row mb-4 mx-1">
                    <div className="col-md-1">
                      <img
                        src={FILE_URL + "" + post.user[0]?.avatar}
                        className="profile-avatar"
                      />
                    </div>
                    <div className="col-md-8">
                      <span className="mx-2">{post.user[0]?.fullName}</span>
                      <span className="mx-2">{post.user[0]?.profession}</span>
                    </div>
                    <div className="col-md-2">
                      <span className="text-end">{post.createdDate}</span>
                    </div>
                  </div>
                  <div>
                    <img src={FILE_URL + "" + post.imageUrl} />
                    <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <button className="btn btn-default" onClick={() => likeOrUnlike(post._id)}>
                        <i className="fa-regular fa-thumbs-up"></i>
                        Like
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button
                        className="btn btn-default mx-2"
                        onClick={() => showComment(index)}
                      >
                        <i className="fa-regular fa-comment mx-2"></i>
                        Comment
                      </button>
                    </div>
                    <div
                      className="mt-4"
                      style={{ display: "none" }}
                      id={`div-${index}`}
                    >
                      <div className="input-group mb-3 mt-3">
                        <input
                          type="text"
                          id={"text-" + index}
                          className="form-control"
                          placeholder="Add a comment..."
                          style={{ borderRadius: "25px 0px 0px 25px" }}
                        />
                        <button
                          className="btn btn-success"
                          type="button"
                          id="button-addon2"
                          style={{ borderRadius: "0px 25px 25px 0px" }}
                          onClick={() => sendComment(post._id, index)}
                        >
                          Comment
                        </button>
                      </div>
                      <br />
                      {post.comments.map((comment, index) => {
                        return (
                          <div key={index}>                                             
                            <p>{comment.comment}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <PostModal />
    </>
  );
};

export default Home;
