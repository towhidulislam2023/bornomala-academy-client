import React, { useContext } from 'react';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure/useAxiosSecure';
const SocialLogin = () => {
    const { handelGoogleLogin } = useContext(AuthProviderContext)
    const navigate = useNavigate()
    const [axiosSecure] = useAxiosSecure()
    const location = useLocation()
    const from = location.state?.pathname || "/"
    const handelLoginByGoogle = () => {
        handelGoogleLogin()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result.user.displayName, email: result.user.email, photo: result.user.photoURL, role: "user" }
                console.log(userInfo, "update user info");
                axiosSecure.post("/users", userInfo)
                    .then(info => {
                        if (info.data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Thank You',
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }
                        console.log(info.data)
                    })
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