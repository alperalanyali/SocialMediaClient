import Drawer from '@mui/material/Drawer';
const Profile = () => {
  return (
    <>
      <div className="container text-center mt-4">
        <div className="card-div">
          <div className="row">
            <div className="col-md-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdQArnvrchduwBUmj2T3rjla4bX5kQTx1TYd7IlEgUg&s"
                className="profile-img"
              />
            </div>
            <div className="col-md-2">
                <button className="btn btn-outline-primary">Düzenle</button>
            </div>
          </div>
          <div className="mt-4">
            <div className="row">
              <div className="col-md-10">
                <h4>Alper ALANYALI </h4>
              </div>
              <div className="col-md-2">
         
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-10">
                <h5>Full Stack Developer</h5>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
