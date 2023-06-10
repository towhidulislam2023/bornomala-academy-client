import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-[100vh] bg-gray-100 flex items-center justify-center flex-col'>
            <h1 className="text-4xl font-extrabold text-red-800">Error Found</h1>
            <img src="https://cdn.dribbble.com/users/605899/screenshots/4144886/media/ce35614480247e178703e99048a7e724.gif" alt="" />
        <Link className='link link-success text-3xl' to={"/"}>Go Home</Link>
        </div>
    );
};

export default ErrorPage;