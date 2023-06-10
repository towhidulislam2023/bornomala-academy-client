import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import img1 from '../../../assets/home/slider/classroom-tie-empty-academic-abacus.jpg';
import img2 from '../../../assets/home/slider/english-book-resting-table-working-space.jpg';
import img3 from '../../../assets/home/slider/group-students-posing-table.jpg';
import img4 from '../../../assets/home/slider/medium-shot-colleagues-high-five.jpg';
import img5 from '../../../assets/home/slider/young-english-teacher-doing-her-lessons-online.jpg';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
const Slider = () => {

    return (
        <motion.div
        
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
        
        className='z-0'>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    
                    <div className='bg-black'>
                        <img src={img2} className=' opacity-60  h-[80vh] relative w-[100%]' alt="" />
                        <div className=' text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '><h1 className="text-3xl md:text-5xl  text-yellow-600 text-center font-extrabold shadow-lg">Building Bridges through Language Proficiency</h1>
                            <Link to={"/classes"}> <button className="btn btn-success my-10">Explore Our Courses</button></Link>
                        
                        </div> 
                        </div>                   
                    </SwiperSlide>
                <SwiperSlide>
                    
                    <div className='bg-black'>
                        <img src={img1} className=' opacity-60  h-[80vh] relative w-[100%]' alt="" />
                        <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '><h1 className="text-3xl md:text-5xl  text-yellow-600 text-center font-extrabold ">Language Fluency, Boundless Possibilities</h1> <Link to={"/classes"}> <button className="btn btn-success my-10">Explore Our Courses</button></Link></div>
                    </div>                  
                    </SwiperSlide>
                <SwiperSlide>
                    
                    <div className='bg-black'>
                        <img src={img3} className=' opacity-60  h-[80vh] relative w-[100%]' alt="" />
                        <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '><h1 className="text-3xl md:text-5xl  text-yellow-600 text-center font-extrabold ">Language Fluency, Boundless Possibilities</h1> <Link to={"/classes"}> <button className="btn btn-success my-10">Explore Our Courses</button></Link></div>
                    </div>               
                    </SwiperSlide>
                <SwiperSlide>
                    
                    <div className='bg-black'>
                        <img src={img4} className=' opacity-60  h-[80vh] relative w-[100%]' alt="" />
                        <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '><h1 className="text-3xl md:text-5xl  text-yellow-600 text-center font-extrabold ">Empowering Minds through Language</h1><Link to={"/classes"}> <button className="btn btn-success my-10">Explore Our Courses</button></Link></div>
                    </div>                  
                    </SwiperSlide>
                <SwiperSlide>
                    
                    <div className='bg-black'>
                        <img src={img5} className=' opacity-60  h-[80vh] relative w-[100%]' alt="" />
                        <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '><h1 className=" text-3xl md:text-5xl text-yellow-600 text-center font-extrabold ">Fluent in the Language of Opportunity</h1><Link to={"/classes"}> <button className="btn btn-success my-10">Explore Our Courses</button></Link></div>
                    </div>                   
                    </SwiperSlide>
                
            </Swiper>
        </motion.div>
    );
};

export default Slider;