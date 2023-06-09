import React from 'react';
import UseBestInstructors from '../../../hook/UseBestInstructors/UseBestInstructors';
import DispalyInstructors from '../../../Sheared/DispalyInstructors/DispalyInstructors';

const BestInstructors = () => {
    const [instructors, refetch]=UseBestInstructors()
    // console.log(instructors , " logged from bestInstractor");
    return (
        <div className='mt-10'>
            <h1 className="text-3xl font-extrabold text-center">---Our Popular instructors--- </h1>
            <p className="text-center">
                "Unlock Your Potential with Our Popular Instructors!"</p>
            <div className="divider"></div>
            <div className='md:grid md:grid-cols-2 gap-10 mx-auto '>
                {
                    instructors && instructors.map(Instructor => <DispalyInstructors key={Instructor._id} instructor={Instructor}></DispalyInstructors>)
                }
            </div>
        </div>
    );
};

export default BestInstructors;