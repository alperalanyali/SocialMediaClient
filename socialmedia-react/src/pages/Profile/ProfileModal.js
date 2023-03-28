import { useEffect, useState } from "react";

import callToast from "../../commons/services/Toastify-service";
import requestApi from "../../commons/services/api-service";

const ProfileModal = ({ getUserInfo }) => {
  const [user, setUser] = useState({});
  const [imageUrl, setImageUrl] = useState();
  const getUserInfo2 = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    requestApi("get", `/auth/getUser/${user}`, null, (res) => {
      setUser(res.user);
    });
  };
  useEffect(() => {
    getUserInfo2();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const updateUser = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("_id", user._id);
    formData.append("email", user.email);
    formData.append("fullname", user.fullname);
    formData.append("password", user.password);
    formData.append("profession", user.profession);
    formData.append("avatar", imageUrl);
    formData.append("bio", user.bio);
    formData.append("phone", user.phone);
    await requestApi("post", "/auth/updateUser", formData, (res) => {
      const btnClose = document.getElementById("btnClose");
      callToast("success", res.message, 3000);
      getUserInfo();
      btnClose.click();
    });
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.files[0]);
  };
  return (
    <div
      className="modal fade"
      id="profileModal"
      tabindex="-1"
      aria-labelledby="profileModallLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="profileModalLabel">
              Edit Profile
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="btnClose"
            ></button>
          </div>

          <div className="modal-body">
            <div classNameName="form-group mb-4">
              <label htmlFor="email" classNameName="tex-muted">
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
            <input
              type="file"
              className="form-control mt-2 mb-2"
              onChange={handleImageChange}
            />
            <div classNameName="form-group mb-4">
              <label htmlFor="fullName" classNameName="tex-muted">
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
            <div classNameName="form-group mb-4">
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
            <div classNameName="form-group mb-4">
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
            <div className="from-group mb-4">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={user?.phone}
                onChange={handleInput}
              />
            </div>
            <div className="from-group mb-4">
              <label htmlFor="bio">Bio</label>
              <textarea
                name="bio"
                className="form-control"
                value={user?.bio}
                onChange={handleInput}
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
         
            <button type="button" class="btn btn-primary" onClick={updateUser}>
                Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
