import React from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import BestInstructors from '../BestInstructors/BestInstructors';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <BestInstructors></BestInstructors>
        </div>
    );
};

export default Home;