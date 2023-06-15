import React, { useEffect, useRef, useState } from 'react';
import UsePopularClassess from '../../../hook/usePopularClasses/UsePopularClassess';
import ClassCard from '../../../Sheared/ClassCard/ClassCard';
import { motion } from 'framer-motion';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const ElementInView = ({ children }) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const { top } = elementRef.current.getBoundingClientRect();
            const isVisible = top <= window.innerHeight * 0.8; // Adjust the threshold as needed
            setIsVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check the initial state on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            ref={elementRef}
            style={{
                visibility: isVisible ? 'visible' : 'hidden',
                transition: 'opacity 1s ease-in-out',
                opacity: isVisible ? 1 : 0,
            }}
        >
            {children}
        </motion.div>
    );
};

const PopularClasses = () => {
    const [popularClasses] = UsePopularClassess();

    const handleSmoothScroll = () => {
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <button className='fixed right-0 bottom-0' onClick={handleSmoothScroll}><FaArrowAltCircleUp className='text-5xl text-success'></FaArrowAltCircleUp></button>

            <ElementInView>
                <div className="my-10">
                    <h1 className="text-3xl font-extrabold text-center">---Our Popular Classes---</h1>
                    <p className="text-center">"Unlock Your Potential with Our Popular Courses!"</p>
                    <div className="divider"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
                        {popularClasses &&
                            popularClasses.map((singleClass) => (
                                <ClassCard key={singleClass._id} popularclass={singleClass} />
                            ))}
                    </div>
                </div>
            </ElementInView>
        </div>
    );
};

export default PopularClasses;
