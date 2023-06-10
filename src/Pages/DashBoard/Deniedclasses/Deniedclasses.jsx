import React, { useContext, useState } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import { AuthProviderContext } from '../../../Provider/AuthProvider/AuthProvider';

const Deniedclasses = () => {
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: pendingClasses = [] } = useQuery({
        queryKey: ['pendingClasses'],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure("/deniedclasses")
                // console.log('res from axios', res)
                return res.data;
            }
        },
    })
    const handelApprove = (classes) => {
        // console.log(classes);
        axiosSecure.put(`/classes/${classes._id}`, { status: "approved" })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'This Class Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })


                }
                // console.log(res.data)
            })

    }
    return (
        <div>
            <div className="divider my-10"><h1 className="text-4xl">Manage Classes</h1></div>

            {
                pendingClasses && pendingClasses.map(classes => <div key={classes._id} className='my-6 md:flex items-center gap-20 border md:px-12 py-5'>
                    <div>
                        <img className='h-24' src={classes.image} alt="" />
                    </div>
                    <div className='md:flex-grow'>
                        <div className='flex'>
                            <p className='text-xl'> Course Name: <span className='font-bold'> {classes.name} </span></p> <div className={`badge {
                                ${classes.status === "approved" ? "badge-success" : "badge-error"}
                            } `}>{classes.status}</div>
                        </div>
                        <p className='text-xl my-2'> course Teacher:<span className='font-semibold'> {classes.instructor} </span> </p>
                        <p className='text-xl my-2'> course Student:<span className='font-semibold'> {classes.totalSeats - classes.availableSeats} </span> </p>



                    </div>

                    <div className='space-y-7'>
                        <button onClick={() => handelApprove(classes)} className='btn btn-success '>Approved</button>

                    </div>


                </div>)
            }
        </div>
    );
}

export default Deniedclasses;