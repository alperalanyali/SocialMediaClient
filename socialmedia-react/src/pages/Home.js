import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import PostModal from "./PostModal";
import requestApi from '../commons/services/api-service'

const Home = () => {
  const [posts,setPosts]= useState([]);
  const [userInfo,setUserInfo] = useState({})
  const navigate = useNavigate();
  const goToProfile = ()=>{
    navigate('/profile')
  }
  const getPosts  = ()=>{
    requestApi('get','/post/getAll',null,(res)=>{
      setPosts(res.data);
      console.log(posts);  
    });
  }
  const getUserInfo = async ()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    requestApi('get',`/auth/getUser/${user}`,null,(res)=>{
        setUserInfo(res.user);
        console.log(user);
    });
  }
  useEffect(()=>{
    getUserInfo();
    getPosts();    
  },[])
  return (
    <>
      <div style={{ marginTop: "20px", marginLeft: "5%", marginRight: "5%" }}>
        <div className="row">
          <div className="col-md-3 ">
            <div className="text-center card-div">
              <img
                src={userInfo?.avatar}
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
            {posts.map((post,index) => {
              return (
                <div
                  key={index}
                  className="card-div mx-4"
                  style={{ marginBottom: "30px" }}
                >
                  <div className="row mb-4 mx-1">
                    <div className="col-md-1">
                      <img
                        src={post.user[0].avatar}
                        className="profile-avatar"
                      />
                    </div>
                    <div className="col-md-8">
                      <span className="mx-2">{post.user[0]?.fullName}</span>
                      <span className="mx-2">{post.user[0 ]?.profession}</span>
                 
                    </div>
                    <div className="col-md-2">
                        <span className="text-end">{post.createdDate}</span>
                    </div>
                  </div>
                  <div>
                  <img
                        src={post.imageUrl}
        
                      />
                    <p dangerouslySetInnerHTML={{__html:post.content}}></p>
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
