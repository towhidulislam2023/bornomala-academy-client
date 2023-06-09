import React, { useContext } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { AuthProviderContext } from '../../../Provider/AuthProvider/AuthProvider';

const ManageUser = () => {
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure(`/users`)
                console.log('res from axios', res)
                return res.data;
            }
        },
    })
    const handelUserRole=(event)=>{
        const role = event.target.value
        console.log(role);

    }
    console.log(users);
    return (
        <div>
            <div className="divider"><h1 className="text-4xl font-extrabold">ALL USER</h1></div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                   #
                                </th>
                                <th>Name and Email</th>
                                <th>Role</th>
                                <th>Action</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users && users.map((user,index) => <tr key={user._id}>
                                    <th>
                                        {index+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user?.name}</div>
                                                <div className="text-sm ">{user?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                      {user.role}
                                    </td>
                                    <td>
                                        <button disabled={user.role==="admin"} className="btn btn-xs btn-success ">Make Admin</button>
                                        <button disabled={user.role === "instructor"} className=" ml-3 btn btn-xs btn-outline btn-success">Make Instructor</button>
                                    </td>
                                    <th>
                                        <button  className="btn btn-ghost btn-xs">details</button>
                                    </th>
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