import React from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import BestInstructors from '../BestInstructors/BestInstructors';
import Foryou from '../ForYou/Foryou';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <BestInstructors></BestInstructors>
            <Foryou></Foryou>
        </div>
    );
};

export default Home;