import React from 'react';
import UseClasses from '../../hook/UseClasses/UseClasses';
import ClassCard from '../../Sheared/ClassCard/ClassCard';

const Classes = () => {
    const [classes] = UseClasses()
    console.log(classes);
    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto'>
                {
                    classes && classes.map(SingalClass => <ClassCard key={SingalClass._id} popularclass={SingalClass}></ClassCard>
                    )
                }
            </div>
        </div>
    );
};

export default Classes;