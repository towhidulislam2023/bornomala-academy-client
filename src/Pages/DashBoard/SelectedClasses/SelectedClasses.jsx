import React from 'react';
import UseCart from '../../../hook/UseCart/UseCart';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../hook/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';

const SelectedClasses = () => {

    const [carts, refetch]=UseCart()
    const [axiosSecure]=useAxiosSecure()
    const total = carts.reduce((sum, item) => item.price + sum, 0);
    console.log(carts , "from Selecterd class");
    const handleDelete=(item)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        // console.log(res.data)
                    })
              
            }
        })





    }
    return (
        <div className='my-10'>
            <div className="uppercase font-semibold  md:flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {carts.length}</h3>
                <h3 className="text-3xl my-10">Total Price: ${total}</h3>
               
            </div>
            <div className="overflow-x-auto w-[90vw] md:w-full  h-[60vh] mt-10">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Course Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          carts &&  carts.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                  {item.courseName}
                                </td>
                                <td>
                                  {item.courseInstructorName} <br />
                                  <span>{item.instructorEmail}</span>
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                  <Link to={`/dashboard/payment/${item.courseId}`}>
                                  <button className="btn btn-success btn-sm">PAY</button>

                                  </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            <div className='flex items-end justify-end'>
                    {/* <button className="btn btn-success btn-sm">PAY All</button> */}
                
            </div>
        </div>
    );
};

export default SelectedClasses;