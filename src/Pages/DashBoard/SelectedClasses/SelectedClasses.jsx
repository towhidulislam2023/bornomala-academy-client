import React from 'react';
import UseCart from '../../../hook/UseCart/UseCart';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const SelectedClasses = () => {

    const [carts]=UseCart()
    console.log(carts , "from Selecterd class");
    const handleDelete=()=>{
        
    }
    return (
        <div className='my-10'>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {carts.length}</h3>
                {/* <h3 className="text-3xl">Total Price: ${}</h3> */}
              
            </div>
            <div className="overflow-x-auto h-[60vh] w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Course Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
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
                                  {item.courseInstructorName}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                  <Link to="/dashboard/payment">
                                      <button className="btn btn-success btn-sm">PAY</button>
                                  </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;