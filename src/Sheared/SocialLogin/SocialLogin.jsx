import React, { useContext } from 'react';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
const SocialLogin = () => {
    const { handelGoogleLogin } = useContext(AuthProviderContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.pathname || "/"
    const handelLoginByGoogle = () => {
        handelGoogleLogin()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })

            })
            .catch(error => { console.error(error) })

    }
    return (
        <div>
            <hr className='border mt-5 border-gray-400  mx-auto' />
            <button onClick={handelLoginByGoogle} className='btn flex w-[100%] mx-auto bg-transparent mt-5 bg-gray-300 text-black hover:bg-transparent'>
                <span className=''><FaGoogle className='text-green-600 text-2xl '></FaGoogle></span>  <span className='flex-grow'>Continue with Google </span>
            </button>
        </div>
    );
};

export default SocialLogin;