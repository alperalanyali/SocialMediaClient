import { Link, useNavigate } from "react-router-dom";

import Register from "./Register";

const Login = () => {
 const navigate = useNavigate();
 const goToRegister = ()=>{
    navigate('/register')
 }
 const login = ()=>{
    navigate('/');
 }
  return (
    <>
      <div className="row">
        <div className="col-lg-8 loginBackgroundImage"></div>
        <div className="col-lg-4 loginBackgroundColor">
          <div className="login-div" style={{ marginTop: "200px" }}>
            <div className="text-center">Login Page</div>
            <form autoComplete="off" >
                <div className="form-group">
                    <label className="text-muted" htmlFor="userName">Username</label>
                    <input className="form-control" name="userName"  />
                </div>
                <div className="form-group">
                    <label className="text-muted" htmlFor="password">Password</label>
                    <input className="form-control" name="password" />
                </div>
                <div className="form-group mt-2">
                    <button className="btn btn-outline-primary w-100" onClick={login}>Login</button>
                    <Link
                     to='/register'
                     style={{
                       float: 'right'
                     }}
                     className="mt-2"
                     >Register</Link>
                </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
