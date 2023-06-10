import React, { useContext } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { AuthProviderContext } from '../../../Provider/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const MyClasses = () => {
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: myclasses = [] } = useQuery({
        queryKey: ['classes'],
        enabled: !loading,
        queryFn: async () => {
           if (user) {
               const res = await axiosSecure(`/instructorclasses/${user.email}`)
            //    console.log('res from axios', res)
               return res.data;
           }
        },
    })
    // console.log(myclasses);
    return (
        <div>
        <h1 className='text-4xl font-bold'>My Classes</h1>
        <div className="divider"></div>
           {
                myclasses && myclasses.map(classes => <div key={classes._id} className='my-6 md:flex items-center gap-20 border md:px-12 py-5'>
                    <div>
                        <img className='h-24' src={classes.image} alt="" />
                    </div>
                    <div className='md:flex-grow'>
                        <div className='flex'>
                            <p className='text-xl'> Course Name: <span className='font-bold'> {classes.name} </span></p> <div className={`badge {
                                ${classes.status==="approved"?"badge-success":"badge-error"}
                            } `}>{classes.status}</div>
                        </div>
                        <p className='text-xl my-2'> course Teacher:<span className='font-semibold'> {classes.instructor} </span> </p>
                        <p className='text-xl my-2'> course Student:<span className='font-semibold'> {classes.totalSeats - classes.availableSeats} </span> </p>
                        <p>{classes.feedback?classes.feedback:""}</p>
                        


                    </div>

                    <Link to={`/dashboard/updateClasses/${classes._id}`}><button className='btn btn-success '>Update</button></Link>


                </div>)
           }
        </div>
    );
};

export default MyClasses;