import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';

const UseCart = () => {
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts'],
        enabled: !loading,
        queryFn: async () => {
           if (user) {
               const res = await axiosSecure(`/carts?email=${user?.email}`)
            //    console.log('res from axios', res)
               return res.data;
           }
        },
    })
    return [carts, refetch]
};

export default UseCart;