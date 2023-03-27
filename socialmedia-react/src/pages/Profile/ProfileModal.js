const ProfileModal = (props) => {
    const user = props.user;
    console.log(user);
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
            ></button>
          </div>
          <div class="modal-body">
            <div className='form-group mb-4'>
                <label htmlFor="email" className="tex-muted"> Email</label>
                <input name='email' type='text' className="form-control" value={user.email}/>
            </div>
            <div className='form-group mb-4'>
                <label htmlFor="fullName" className="tex-muted"> Fullname</label>
                <input name='fullName' type='text' className="form-control" value={user.fullName}/>
            </div>
            <div className='form-group mb-4'>
                <label htmlFor="password" className="tex-muted">Password</label>
                <input name='password' type='text' className="form-control" value={user.password}/>
            </div>
            <div className='form-group mb-4'>
                <label htmlFor="proffesion" className="tex-muted">Profession</label>
                <input name='proffesion' type='text' className="form-control" value={user.profession}/>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
                Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;