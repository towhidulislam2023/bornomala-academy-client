import React, { useContext } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { AuthProviderContext } from '../../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ManageUser = () => {
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure(`/users`)
                // console.log('res from axios', res)
                return res.data;
            }
        },
    })
    const handelMakeAdmin = (userdetails) => {
        // console.log(userdetails._id);
        Swal.fire({
            title: 'Are you sure?',
            text: `Do You Want to Make ${userdetails.name} is an Admin?`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#00FF00',
            confirmButtonText: 'Yes, I Want!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/users/${userdetails._id}`, { role: "admin" })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Added!',
                                `Now ${userdetails.name} is A Admin`,
                                'success'
                            )
                        }
                    })
            }
        })
    }
    const handelMakeInstructor = (userdetails) => {
        // console.log(userdetails._id);
        Swal.fire({
            title: 'Are you sure?',
            text: `Do You Want to Make ${userdetails.name} is an Instructor?`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#00FF00',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, I Want!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/users/${userdetails._id}`, { role: "instructor" })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            const instructor = { image: userdetails.photo, name: userdetails.name, email: userdetails.email, numOfClasses: 0, totalStudents:0}

                            console.log(instructor);

                            axiosSecure.post("/instructors",instructor)
                            .then(res=>{
                                if (res.data.insertedId) {
                                    refetch()
                                    Swal.fire(
                                        'Added!',
                                        `Now ${userdetails.name} is A Instructor`,
                                        'success'
                                    )
                                    
                                }
                                console.log(res.data)
                            })

                           
                        }
                    })
            }
        })
    }
    // console.log(users);
    return (
        <div>
            <div className="divider"><h1 className="text-4xl font-extrabold">ALL USER</h1></div>

            <div>
                <div className="overflow-x-auto w-[90vw] md:w-full  h-[80vh] mt-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Name and Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users && users.map((userdetails, index) => <tr key={userdetails._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={userdetails?.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{userdetails?.name}</div>
                                                <div className="text-sm ">{userdetails?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {userdetails.role}
                                    </td>
                                    <td className='flex '>
                                        <button onClick={() => handelMakeAdmin(userdetails)} disabled={userdetails.role === "admin" || userdetails.email === user.email} className="btn btn-xs btn-success ">Make Admin</button>
                                        <button onClick={() => handelMakeInstructor(userdetails)} disabled={userdetails.role === "instructor" || userdetails.email === user.email} className=" ml-3 btn btn-xs btn-outline btn-success">Make Instructor</button>
                                    </td>
                                   
                                </tr>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageUser;