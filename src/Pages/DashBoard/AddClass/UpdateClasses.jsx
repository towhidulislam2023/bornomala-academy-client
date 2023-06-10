import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthProviderContext } from '../../../Provider/AuthProvider/AuthProvider';
import useAxiosSecure from '../../../hook/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const UpdateClasses = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    // console.log(user, " user from add");
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    console.log(img_hosting_token);
    const {id}=useParams()
    console.log(id);
    const { refetch, data: classdata = {} } = useQuery({
        queryKey: ['classdata'],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure(`/findclasses/${id}`)
                // console.log('res from axios', res)
                return res.data;
            }
        },
    })
console.log(classdata);

  
    const onSubmit = data => {
        // console.log(data);
        const updateClasses = {
            name: data.courseName,  availableSeats: parseInt(data.availableSeats) || 40, price: parseInt(data.price)
        }
        console.log(updateClasses);
        axiosSecure.patch(`/updateclasses/${id}`, updateClasses)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount>0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your update This class',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                    reset()

                }
            })
    }
    return (
        <div>
            <div className='divider'>
                <h1 className='text-3xl font-semibold'>Update Class Info</h1>
            </div>
            <div className='bg-green-100 my-12 p-6'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className=''>
                        <h1 className='px-2 text-xl font-semibold my-3'>Course Name</h1>
                        <input
                            {...register("courseName", { required: true })}
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            defaultValue={classdata.name}
                            name='courseName'
                            placeholder='Name'
                        />
                    </div>
                    <div>
                        <h1 className='px-2 text-xl font-semibold my-3'>Price</h1>
                        <input

                            {...register("price", { required: true })}
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="number"
                            required
                            defaultValue={classdata.price}
                            name='price'
                            placeholder='price'
                        />
                    </div>
                    
                    <div>
                        <h1 className='px-2 text-xl font-semibold my-3'>Available seats</h1>
                        <input
                            {...register("availableSeats", { required: true })}
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="number"
                            required
                            defaultValue={classdata.availableSeats}
                            name='availableSeats'
                            placeholder='Available Seats'
                        />
                    </div>
                    <input className='btn btn-block btn-success my-5' type="submit" value={"Add A Course"} id="" />
                </form>
            </div>
        </div>
    );
};

export default UpdateClasses;