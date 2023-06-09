import React from 'react';
import UsePopularClassess from '../../../hook/usePopularClasses/UsePopularClassess';
import ClassCard from '../../../Sheared/ClassCard/ClassCard';

const PopularClasses = () => {
    const [popularClasses]=UsePopularClassess()
    // console.log(popularClasses);
    return (
        <div className='my-10'>
            <h1 className="text-3xl font-extrabold text-center">---Our Popular Classes--- </h1>
            <p className="text-center">"Unlock Your Potential with Our Popular Courses!"</p>
            <div className="divider"></div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto'>
                {
                    popularClasses && popularClasses.map(SingalClass => <ClassCard key={SingalClass._id} popularclass={SingalClass}></ClassCard>
                    )
                }
           </div>


        </div>
    );
};

export default PopularClasses;