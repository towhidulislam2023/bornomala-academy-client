import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthProviderContext } from '../../../Provider/AuthProvider/AuthProvider';
import useAxiosSecure from '../../../hook/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthProviderContext);
    console.log(user, " user from add");
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    console.log(img_hosting_token);
    const [axiosSecure] = useAxiosSecure()
    const onSubmit = data => {
        console.log(data);

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.data.display_url) {
                    const AddedClasses = {
                        status: "pending", image: imgResponse.data.display_url, name: data.courseName, instructor: data.teachername, email: data.teacheremail, availableSeats: data.availableSeats || 40, totalSeats: data.totalSeats
                    }
                    axiosSecure.post("/classes",AddedClasses)
                    .then(res=>{
                        console.log(res.data)
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            reset()
                            
                        }
                    })

                    console.log(AddedClasses);
                }

            })
    }

    return (
        <>
            <div className='divider'>
                <h1 className='text-3xl font-semibold'>This is Add A class</h1>
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
                            name='price'
                            placeholder='price'
                        />
                    </div>
                    <div>
                        <h1 className='px-2 text-xl font-semibold my-3'>Course Teacher Name</h1>
                        <input
                            {...register("teachername", { required: true })}

                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='courseTeacherName'
                            defaultValue={user.displayName}
                            placeholder='Course Teacher'
                        />
                    </div>
                    <div>
                        <h1 className='px-2 text-xl font-semibold my-3'>Course Teacher Email</h1>
                        <input
                            {...register("teacheremail", { required: true })}
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='courseTeacherEmail'
                            defaultValue={user.email}
                            placeholder='Course Teacher'
                        />
                    </div>
                    <div>
                        <h1 className='px-2 text-xl font-semibold my-3'>Available seats</h1>
                        <input
                            {...register("availableSeats", { required: true })}
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="number"
                            required
                            name='availableSeats'
                            placeholder='Available Seats'
                        />
                    </div>
                    <div>
                        <h1 className='px-2 text-xl font-semibold my-3'>Total seats</h1>
                        <input
                            {...register("totalSeats", { required: true })}
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="number"
                            required
                            name='totalSeats'
                            defaultValue={40}
                            placeholder='Total Seats'
                        />
                    </div>
                    <div>
                        <h1 className='px-2 text-xl font-semibold my-3'>Total seats</h1>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                    <input className='btn btn-block btn-success my-5' type="submit" value={"Add A Course"} id="" />
                </form>
            </div>
        </>
    );
};

export default AddClass;