import { useEffect, useState } from "react";

import requestApi from '../commons/services/api-service';

const ErrorPage = () => {
  const [errors,setErrors] = useState([]);

  
  const getErrors = async ()=>{
   await requestApi('get','/error/getAll',null,(res)=>{
      // console.log(res);
      setErrors(res.errors);
      console.log(errors)
    })
  }
  useEffect(()=>{
    getErrors();
  },[])
  return (
    <>
      <div className="card-div mt-4 ">
        <table className="table table-hover mt-4 ">
          <thead>
            <tr>
              <th>#</th>
              <th>Url</th>
              <th>Request</th>
              <th>Error</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {
           errors.map((error,index)=>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{error.url}</td>
                  <td>{error?.req}</td>
                  <td>{error.error?.message }</td>
                  <td>{error.createdDate}</td>
                  <td></td>
                </tr>
              )
           }) 
          }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ErrorPage;
