import { useEffect, useState } from "react";

import ProfileModal from "./ProfileModal";
import requestApi from "../../commons/services/api-service";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    _id: "",
    fullName: "",
    email: "",
    password: "",
    profession: "",
    avatar: "",
    createdDate: "",
    __v:0 
  });
  const getUserInfo = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    requestApi("get", `/auth/getUser/${user}`, null, (res) => {
      setUserInfo(res.user);
  
    });
  };

  useEffect(() => {
    getUserInfo();
    console.log(userInfo)
  }, []);
  return (
    <>
      <div className="container text-center mt-4">
        <div className="card-div">
          <div className="row">
            <div className="col-md-10">
              <img
                src={userInfo.avatar}
                className="profile-img"
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-outline-primary" data-bs-toggle='modal' data-bs-target='#profileModal'>Düzenle</button>
            </div>
          </div>
          <div className="mt-4">
            <div className="row">
              <div className="col-md-10">
                <h4>{userInfo.fullName  } </h4>
              </div>
              <div className="col-md-2"></div>
            </div>
            <div className="row mt-2">
              <div className="col-md-10">
                <h5>{userInfo.profession}</h5>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
      <ProfileModal user={userInfo}></ProfileModal>
    </>
  );
};

export default Profile;
