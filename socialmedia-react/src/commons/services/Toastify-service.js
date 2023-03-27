import { toast } from 'react-toastify';

const CallToast = (type,message,autoColse) =>{
    const options = {
        position: "top-right",
        autoClose: autoColse,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    }
    if(type === "error"){
        toast.error(message, options);
    }else if(type === "warning"){
        toast.warning(message, options);
    }else if(type === "success"){
        toast.success(message, options);
    }else if(type === "info"){
        toast.info(message, options);
    }    
}

export default CallToast;