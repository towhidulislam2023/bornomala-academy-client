import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';

const UseAuthorizarion = () => {
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: userRole = {}, isLoading:isAuthLoading } = useQuery({
        queryKey: ['authorization'],
        enabled: !loading,
        queryFn: async () => {
           if (user) {
               const res = await axiosSecure(`/users/${user.email}`)
               console.log('res from axios', res)
               return res.data.role;
           }
        },
    })
    return [userRole, isAuthLoading, refetch, ]
};

export default UseAuthorizarion;