import requestApi from "./api-service";
const getUserInfo =  (callBack) => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    requestApi("get", `/auth/getUser/${user}`, null, (res) => {
      callBack(res.user);
    });
  };
export default getUserInfo;


  