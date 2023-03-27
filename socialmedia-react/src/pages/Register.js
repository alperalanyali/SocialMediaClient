import { Link, useNavigate } from "react-router-dom";

import callToast from '../commons/services/Toastify-service'
import requestApi from "../commons/services/api-service";
import { useState } from "react";

const Register = ()=>{
  let navigate = useNavigate();
    const [register,setRegister] =useState({
        email:'',
   
        password:''
    })
    const handleInput = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setRegister((prevLogin) => ({
          ...prevLogin,
          [name]: value,
        }));  
       }
    const registering = (e)=>{
        e.preventDefault();
        requestApi('post','/auth/register',register,(res)=>{
              if(res.success){
                navigate('/login');
                callToast('success','Kullanıcı başarılı şekilde oluşturulmuştur',3000);
              }

        })
        
    }
    return(
        <>
        <div className="row">
          <div className="col-lg-8 loginBackgroundImage"></div>
          <div className="col-lg-4 loginBackgroundColor">
            <div className="login-div" style={{ marginTop: "200px" }}>
              <div className="text-center">Register Page</div>
              <form autoComplete="off" onSubmit={registering} >
                  <div className="form-group">
                      <label className="text-muted" htmlFor="Email">Email</label>
                      <input className="form-control" name="email" value={register.email} onChange={handleInput} />
                  </div>
             
                  <div className="form-group">
                      <label className="text-muted" htmlFor="password" >Password</label>
                      <input className="form-control" name="password" value={register.password} onChange={handleInput} />
                  </div>
                  <div className="form-group mt-2">
                      <button className="btn btn-outline-primary w-100" type="submit" >Register</button>
                      <Link
                       to='/login'
                       style={{
                         float: 'right'
                       }}
                       className="mt-2"
                       >Already user?</Link>
                  </div>      
              </form>
            </div>
          </div>
        </div>
      </>
    )
}

export default Register;