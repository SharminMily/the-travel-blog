import React from 'react';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const {googleLogin } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = (media) => {  
        media()
        .then(res => console.log(res))       
            console.log("res.user")
            toast.success('Successfully login!')            
            navigate(location?.state? location.state : '/')
        .catch(err => console.log(err))            
    }


    return (
        <div>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={() => handleGoogle(googleLogin)} className="btn bg-blue-700 text-white hover:bg-black btn-sm">Google</button>
                {/* <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-neutral btn-sm">Github</button> */}
            </div>
        </div>
    );
};

export default SocialLogin;