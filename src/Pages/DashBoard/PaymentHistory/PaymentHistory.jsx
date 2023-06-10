import React, { useContext } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { AuthProviderContext } from '../../../Provider/AuthProvider/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';

const PaymentHistory = () => {
    // paymentshistory
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: paymentsHistory = [] } = useQuery({
        queryKey: ['paymentsHistory'],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure(`/paymentshistory?email=${user.email}`)
                // console.log('res from axios', res)
                return res.data;
            }
        },
    })
    // console.log(paymentsHistory);


    return (
        <div>
            <div className="divider"><h1 className='text-3xl font-bold'> Your payment History</h1></div>
            <p className='text-center'>{user.email}</p>
            {
                <div className="overflow-x-auto w-[90vw] md:w-full  h-[60vh] mt-10">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Course Name</th>
                                <th>Course Instructor</th>
                                <th>Price</th>
                                <th>Transaction ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentsHistory &&
                                paymentsHistory.map((item, index) => (
                                    <tr key={item.transactionId}>
                                        <td>{index + 1}</td>
                                        <td>{item.courseName}</td>
                                        <td>{item.courseInstractorsEmail}</td>
                                        <td className="text-end">${item.price}</td>
                                        <td>{item.transactionId}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>


                </div>
            }
            
        </div>
    );
};

export default PaymentHistory;