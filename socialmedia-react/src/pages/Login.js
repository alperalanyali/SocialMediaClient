import { Link, useNavigate } from "react-router-dom";

import callToast from '../commons/services/Toastify-service'
import requestApi from "../commons/services/api-service";
import { useState } from "react";

const Login = () => {
 const navigate = useNavigate();
const [loginInfo,setLoginInfo] = useState({  
  email:'',
  password:''
})
 const login = (e)=>{
  e.preventDefault()  
  requestApi('post','/auth/login',loginInfo,(res)=>{
    
   if(res.success){
    callToast("success","Hoşgeldiniz",3000);
    localStorage.setItem('user',JSON.stringify(res.result._id));
    navigate('/');
   } else {
    callToast("error",res.message,5000)
   }
   
  });  
  
  // navigate('/');
 }

 const handleInput = (e)=>{
  e.preventDefault();
  const {name,value} = e.target;
  setLoginInfo((prevLogin) => ({
    ...prevLogin,
    [name]: value,
  }));  
 }
  return (
    <>
      <div className="row">
        <div className="col-lg-8 loginBackgroundImage"></div>
        <div className="col-lg-4 loginBackgroundColor">
          <div className="login-div" style={{ marginTop: "200px" }}>
            <div className="text-center">Login Page</div>
            <form autoComplete="off" onSubmit={login} >
                <div className="form-group">
                    <label className="text-muted" htmlFor="Email">Email</label>
                    <input className="form-control" name="email" value={loginInfo.email} onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label className="text-muted" htmlFor="password" >Password</label>
                    <input className="form-control" name="password" value={loginInfo.password} onChange={handleInput} />
                </div>
                <div className="form-group mt-2">
                    <button className="btn btn-outline-primary w-100" type="submit" >Login</button>
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
