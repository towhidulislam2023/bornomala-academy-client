import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';

const UseInstructors = () => {
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: allInstructors = [] } = useQuery({
        queryKey: ['allInstructors'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure("/instructors")
            // console.log('res from axios', res)
            return res.data;
        },
    })
    return [allInstructors, refetch]
};

export default UseInstructors;