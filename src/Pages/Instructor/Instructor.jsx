import React from 'react';
import UseInstructors from '../../hook/UseInstructors/UseInstructors';
import DispalyInstructors from '../../Sheared/DispalyInstructors/DispalyInstructors';

const Instructor = () => {
    const [allInstructors] = UseInstructors()
    // console.log("instructors", allInstructors);
    return (
        <div>
            <div className='h-[15vh] bg-green-200 py-10'>
                
                <div className="divider"><h1 className="text-center text-4xl font-extrabold">Our Instructor</h1></div>
            </div>
            <div className='md:grid md:grid-cols-2 gap-10 mx-auto '>
                {
                    allInstructors && allInstructors.map(Instructor => <DispalyInstructors key={Instructor._id} instructor={Instructor}></DispalyInstructors>)
                }
            </div>
        </div>
    );
};

export default Instructor;