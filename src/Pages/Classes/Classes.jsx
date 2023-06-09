import React from 'react';
import UseClasses from '../../hook/UseClasses/UseClasses';
import ClassCard from '../../Sheared/ClassCard/ClassCard';

const Classes = () => {
    const [classes] = UseClasses()
    // console.log(classes);
    return (
        <div className=' mb-10'>
            <div className='h-[15vh] bg-green-200 py-10 my-10'>

                <div className="divider"><h1 className="text-center text-4xl font-extrabold">Our Classes</h1></div>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto'>
                    {
                        classes && classes.map(SingalClass => <ClassCard key={SingalClass._id} popularclass={SingalClass}></ClassCard>
                        )
                    }
                </div>
            </div>
           
        </div>
    );
};

export default Classes;