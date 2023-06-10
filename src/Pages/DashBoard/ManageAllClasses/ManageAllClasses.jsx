import React from 'react';
import UseClasses from '../../../hook/UseClasses/UseClasses';

const ManageAllClasses = () => {
    const [classes]=UseClasses()
    return (
        <div>

            <div>
                <div className="divider my-10"><h1 className="text-4xl">Manage Classes</h1></div>

                {
                    classes && classes.map(classesDetails => <div key={classesDetails._id} className='my-6 md:flex items-center gap-20 border md:px-12 px-4 py-5'>
                        <div>
                            <img className='h-24' src={classesDetails.image} alt="" />
                        </div>
                        <div className='md:flex-grow'>
                            <div className='flex'>
                                <p className='text-xl'> Course Name: <span className='font-bold'> {classesDetails.name} </span></p> <div className={`badge ${classesDetails.status === "approved" ? "badge-success" : "badge-error"}
                            } `}>{classesDetails.status}</div>
                            </div>
                            <p className='text-xl my-2'> course Teacher:<span className='font-semibold'> {classesDetails.instructor} </span> </p>
                            <p className='text-xl my-2'> course Student:<span className='font-semibold'> {classesDetails.totalSeats - classesDetails.availableSeats} </span> </p>
                            <p>{classesDetails.feedback ? classesDetails.feedback : ""}</p>



                        </div>

                        {/* <button className='btn btn-success '>Approve</button> */}


                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageAllClasses;