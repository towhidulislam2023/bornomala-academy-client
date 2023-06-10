import React from 'react';
import { Link } from 'react-router-dom';

const DispalyInstructors = ({ instructor }) => {
    return (
        <div className='md:flex items-center gap-10 border md:p-10 rounded-lg my-3 md:px-3 md:h-52 '>
            <div className='md:w-[40%]'>
                <img className='rounded-lg h-40 mx-auto' src={instructor.image} alt="" />
            </div>
            <div>
                <p className='text-xl px-6'> Name: {instructor.name}</p>
                <p className='text-lg px-6'> Email: {instructor.email}</p>
                <p></p>
                <Link to={`/classes/${instructor._id}`}><button className='btn btn-block btn-success mt-10'>See All Classes</button></Link>
            </div>
        </div>
    );
};

export default DispalyInstructors;