import React from 'react';
import { FaChalkboardTeacher, FaDollarSign, FaUsers } from 'react-icons/fa';

const ClassCard = ({popularclass}) => {
    const totalStudent = popularclass.totalSeats - popularclass.availableSeats
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={popularclass.image} alt="Shoes" className="rounded-xl relative md:h-[18rem]" />
                <div className="badge absolute badge-success gap-2">
                    <span> Available Seats</span> {popularclass.availableSeats}
                </div>
            </figure>
            <div className="card-body  ">
                <h2 className="card-title text-3xl">{popularclass.name}</h2><div className="badge badge-success gap-2">
                    <span> Available Seats</span> {popularclass.availableSeats}
                </div>
                <span className='flex items-center text-2xl gap-5'><FaUsers className='text-2xl text-green-900' title='Total Students'></FaUsers> {totalStudent}</span>
                <span className='flex items-center text-2xl gap-5'><FaChalkboardTeacher className='text-2xl text-green-900' title='Instructor'></FaChalkboardTeacher> {popularclass.instructor}</span>
                <span className='flex items-center text-2xl gap-5'><FaDollarSign className='text-2xl text-green-900' title='Instructor'></FaDollarSign> {popularclass.price}</span>
                <div className="card-actions mt-auto">
                    <button className="btn btn-block  btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;