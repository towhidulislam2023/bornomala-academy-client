import React, { useContext } from 'react';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const UsePopularClassess = () => {
    const {user,loading}=useContext(AuthProviderContext)
    const [axiosSecure]= useAxiosSecure()
    const { refetch, data: PopularClasses = [] } = useQuery({
        queryKey: ['classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure("/popularClasses")
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [PopularClasses, refetch]
};

export default UsePopularClassess;