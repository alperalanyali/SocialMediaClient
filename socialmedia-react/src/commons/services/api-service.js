import axios from "axios";
const baseApiUrl = 'http://localhost:4200/api/v1'

const requestApi = (method,apiUrl,data,callBack)=>{
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
}

export default requestApi;