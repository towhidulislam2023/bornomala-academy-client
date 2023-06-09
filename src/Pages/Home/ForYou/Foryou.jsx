import React from 'react';
import img1 from '../../../assets/foryou/img0f.png';
import img2 from '../../../assets/foryou/imf1f.png';
import { Link } from 'react-router-dom';
const Foryou = () => {
    return (
        <div className=' md:flex py-10 md:h-[100vh]  bg-opacity-10 items-center setbg my-10 rounded-lg'>
            <div className='md:w-[50%]  md:px-20 px-6'>
                <p className='text-error font-semibold'>DISTANCE LEARNING</p>
                <h1 className="md:text-5xl text-2xl font-bold text-amber-400">Build Your Skills <br /> Online, Anytime</h1>
                <p className='my-6 text-white'>Grow your knowledge and your opportunities with thought leadership, training and tools.</p>
                <Link to={"/classes"}> <button className="btn btn-success my-10">Explore Our Courses</button></Link>
            </div>
            <div className='md:w-[50%] relative px-6'>
                <img className='md:w-62 ' src={img1} alt="" />
                <img className='absolute top-1/2 w-24 md:w-64  ' src={img2} alt="" />

            </div>
        </div>
    );
};

export default Foryou;