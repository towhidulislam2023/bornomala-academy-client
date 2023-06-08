import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';

const UsePaymentProduct = () => {
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: Payclasses = [] } = useQuery({
        queryKey: ['Payclasses'],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure(`/payments?email=${user?.email}`)
                console.log('res from axios', res)
                return res.data;
            }
        },
    })
    return [Payclasses, refetch]
};

export default UsePaymentProduct;