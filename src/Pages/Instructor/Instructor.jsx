import React from 'react';
import UseInstructors from '../../hook/UseInstructors/UseInstructors';
import DispalyInstructors from '../../Sheared/DispalyInstructors/DispalyInstructors';

const Instructor = () => {
    const [allInstructors] = UseInstructors()
    console.log("instructors", allInstructors);
    return (
        <div>
            <h1>This is instractor page</h1>
            <div className='md:grid md:grid-cols-2 gap-10 mx-auto '>
                {
                    allInstructors && allInstructors.map(Instructor => <DispalyInstructors key={Instructor._id} instructor={Instructor}></DispalyInstructors>)
                }
            </div>
        </div>
    );
};

export default Instructor;