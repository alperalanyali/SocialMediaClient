import { useEffect, useState } from "react";

import callToast from '../../commons/services/Toastify-service'
import requestApi from "../../commons/services/api-service";

const ProfileModal = (props) => {
  const [user, setUser] = useState({});
  const getUserInfo = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    requestApi("get", `/auth/getUser/${user}`, null, (res) => {
      setUser(res.user);
  
    });
  };
  useEffect(()=>{
    getUserInfo();
  },[])
  
  const handleInput = (e) => {
      
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const updateUser = async (e) => {
    e.preventDefault();
    
    debugger;
    await requestApi("post", "/auth/updateUser", user, (res) => {
      const btnClose = document.getElementById('btnClose');
      callToast('success',res.message,3000);
      getUserInfo();
      btnClose.click();
    });
  };

  return (
    <div
      class="modal fade"
      id="profileModal"
      tabindex="-1"
      aria-labelledby="profileModallLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="profileModalLabel">
              Edit Profile
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="btnClose"
            ></button>
          </div>

          <div class="modal-body">
            <div className="form-group mb-4">
              <label htmlFor="email" className="tex-muted">
        
                Email
              </label>
              <input
                name="email"
                type="text"
                className="form-control"
                value={user?.email}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="fullName" className="tex-muted">
                {" "}
                Fullname
              </label>
              <input
                name="fullName"
                type="text"
                className="form-control"
                value={user?.fullName}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="tex-muted">
                Password
              </label>
              <input
                name="password"
                type="text"
                className="form-control"
                value={user?.password}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="proffesion" className="tex-muted">
                Profession
              </label>
              <input
                name="profession"
                type="text"
                className="form-control"
                value={user?.profession}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" class="btn btn-primary" onClick={updateUser}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
