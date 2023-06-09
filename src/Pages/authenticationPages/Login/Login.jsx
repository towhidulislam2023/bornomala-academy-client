import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../../../Provider/AuthProvider/AuthProvider';
import SocialLogin from '../../../Sheared/SocialLogin/SocialLogin';

const Login = () => {
    const [seePassState, setSeePassState]=useState(false)
    const { logInuser }=useContext(AuthProviderContext)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        logInuser(data?.email, data?.password)
            .then(result => {
                // console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))

    }
    return (
        <div className='my-10'>
           <div className='md:flex items-center'>
            <div className=' md:w-[50%]'>
                    <img className='h-[70vh] mx-auto' src="https://media.tenor.com/p0G_bmA2vSYAAAAC/login.gif" alt="" />

            </div>
            <div className='  md:w-[50%]'>
                <h1 className="text-4xl font-extrabold">Login</h1>
                    {error}
                    <div className="divider"></div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className='my-12'>


                            <input className='border-l-none border-b-2 bg-gray-100 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black' type="email" {...register("email", { required: "Email Address is required" })} required name='email' placeholder='Username or Email' />
                            {errors.email && <p className='text-error' role="alert">{errors.email?.message}</p>}




                            <input className='border-l-none bg-gray-100  border-b-2 mt-10  rounded-md px-5  border-black border-opacity-5 py-3 outline-none w-full text-black' type={seePassState?"text":"password"} required {...register("password", { required: "Password is required" })} name='password' placeholder='Passowrd' />
                            {errors.password && <p className='text-error' role="alert">{errors.password?.message}</p>}

                            <div className='mt-5 flex items-center justify-between'>
                                <div>
                                    <input onChange={() =>setSeePassState(!seePassState)} type="checkbox" name="checkbox" id="" /> <span className='ml-2'>See Password</span>
                                </div>

                            </div>
                            <button disabled={false} className='btn w-[100%] mx-auto btn-success mt-10'>Login
                            </button>
                            <p className='text-center my-4'>Dont have an Account ? <Link className='underline text-green-900 ' to={'/signup'}>Create an account</Link> </p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>

            </div>

           </div>
        </div>
    );
};

export default Login;