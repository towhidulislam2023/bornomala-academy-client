import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../../../Provider/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import SocialLogin from '../../../Sheared/SocialLogin/SocialLogin';

const Signup = () => {
    const [seePassState, setSeePassState] = useState(false)
    const { signupuser, updateUserinfo } = useContext(AuthProviderContext)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        if (data.password !== data.confirmPassword) {
            setError("Password Not Match")
            return
            
        }
        else{
            signupuser(data.email, data.password)
                .then(result => {
                    console.log(result.user);
                    updateUserinfo(data.name, data.photoUrl)

                    navigate(from, { replace: true })
                })
                .catch(error => setError(error.message))
        }
       

    }
    return (
        <div className='my-10'>
            <div className='md:flex items-center'>
                <div className=' md:w-[50%]'>
                    <img className='h-[70vh] mx-auto' src="https://media.tenor.com/p0G_bmA2vSYAAAAC/login.gif" alt="" />

                </div>
                <div className='  md:w-[50%] my-10 md:my-0'>
                    <h1 className="text-4xl font-extrabold">Sign up</h1>
                    <div className="divider"></div>
                    {error}
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className='my-12'>


                            <input className='border-l-none border-b-2 bg-gray-100 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black' type="text" {...register("name", { required: "Name" })} required name='name' placeholder='Your Name' />
                            {errors.name && <p className='text-error' role="alert">{errors.Name?.name}</p>}


                            <input className='border-l-none border-b-2 mt-10 bg-gray-100 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black' type="email" {...register("email", { required: "Email Address is required" })} required name='email' placeholder='Username or Email' />
                            {errors.email && <p className='text-error' role="alert">{errors.email?.message}</p>}

                            <input className='border-l-none border-b-2 bg-gray-100 rounded-md px-5 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' {...register("password",
                                { pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ },)} name='password' type={seePassState ? "text" : "password"} placeholder='Passowrd' />
                            {errors.password?.type === "pattern" && <p className='text-err' role="alert"> Password must have one Uppercase one lower case, one number and one special character.</p>}
                            
                            <input className='border-l-none border-b-2 bg-gray-100 rounded-md px-5 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' {...register("confirmPassword",
                                { pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ },)} name='confirmPassword' type={seePassState ? "text" : "password"} placeholder='Confirm Passowrd' />
                            {errors.confirmPassword?.type === "pattern" && <p className='text-err' role="alert"> Password must have one Uppercase one lower case, one number and one special character.</p>}

                            <div className='mt-5 flex items-center justify-between'>
                                <div>
                                    <input onChange={() => setSeePassState(!seePassState)} type="checkbox" name="checkbox" id="" /> <span className='ml-2'>See Password</span>
                                </div>

                            </div>

                            <input className='border-l-none border-b-2 mt-10 bg-gray-100 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black' type="text" {...register("photoUrl", { required: "photoUrl" })} required name='photoUrl' placeholder='Your Photo Url' />
                            {errors.photourl && <p className='text-error' role="alert">{errors.photoUrl?.photoUrl}</p>}


                            <button className='btn w-[100%] mx-auto btn-success mt-10'>Signup
                            </button>
                         
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Signup;