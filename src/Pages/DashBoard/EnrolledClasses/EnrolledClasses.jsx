import React from 'react';
import UsePaymentProduct from '../../../hook/UsePaymentProduct/UsePaymentProduct';

const EnrolledClasses = () => {
    const [Payclasses]=UsePaymentProduct()
    console.log(Payclasses);
    return (
        <div>
            <h1 className='text-center text-4xl font-extrabold'>MY Enrolled Courses</h1>
            <div className="divider"></div>

            {
                Payclasses && Payclasses.map(classes=><div key={classes._id} className='my-6 md:flex items-center gap-20 border md:px-12 py-5'>
                <div>
                    <img className='h-24' src={classes.image} alt="" />
                </div>
                <div className='md:flex-grow'>
                        <p className='text-xl'> Course Name: <span className='font-bold'> {classes.name} </span></p>
                        <p className='text-xl my-2'> course Teacher:<span className='font-semibold'> {classes.instructor} </span> </p>

                </div>

                <button className='btn btn-success '>See activity</button>


            </div>)
            }

            
        </div>
    );
};

export default EnrolledClasses;