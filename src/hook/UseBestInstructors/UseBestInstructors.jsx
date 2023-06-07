import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';

const UseBestInstructors = () => {
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure("/popularinstructors")
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [instructors, refetch]
};

export default UseBestInstructors;