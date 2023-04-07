import CallToast from "./Toastify-service";
import axios from "axios";

// const baseApiUrl = "http://localhost:5001/api/v1"
const baseApiUrl="https://socialmedia-o9bv.onrender.com/api/v1  "
const requestApi = (method,apiUrl,data,callBack)=>{
        try {
            if(method ==='get'){
                axios.get(baseApiUrl+apiUrl).then(res=>{
                    // console.log(res.data);
                    callBack(res.data);
                })
            }else if(method === 'post'){
                axios.post(baseApiUrl+apiUrl,data).then(res=>{
                    callBack(res.data);
                });
            }
        } catch (error) {
            CallToast('error',error.data.message)   
        }
}

export default requestApi;