import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import UseBestInstructors from '../../../hook/UseBestInstructors/UseBestInstructors';
import DispalyInstructors from '../../../Sheared/DispalyInstructors/DispalyInstructors';

const BestInstructors = () => {
    const [instructors, refetch] = UseBestInstructors();
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = () => {
        setIsVisible(true);
        setIsScrolling(true);
    };

    useEffect(() => {
        let timeoutId;

        const handleScrollEnd = () => {
            setIsScrolling(false);
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 500);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollEnd);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollEnd);
        };
    }, []);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0, // Adjust the threshold to 0
    });

    if (instructors.length === 0) {
        return (
            <div className="text-center">
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    const isMobile = window.innerWidth <= 768; 

    return (
        <div className="mt-10">
            <h1 className="text-3xl font-extrabold text-center">---Our Popular instructors---</h1>
            <p className="text-center">"Unlock Your Potential with Our Popular Instructors!"</p>
            <div className="divider"></div>
            <div className="md:grid md:grid-cols-2 gap-10 mx-auto">
                {instructors &&
                    instructors.map((instructor, index) => (
                        <motion.div
                            key={instructor._id}
                            ref={isScrolling ? null : ref}
                            initial={isMobile ? {} : { opacity: 0, y: 20 }}
                            animate={isMobile ? {} : { opacity: inView || isScrolling ? 1 : 0, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: isMobile ? 0 : index * 0.2,
                                ease: 'easeInOut',
                            }}
                        >
                            <DispalyInstructors instructor={instructor} />
                        </motion.div>
                    ))}
            </div>
        </div>
    );
};

export default BestInstructors;
