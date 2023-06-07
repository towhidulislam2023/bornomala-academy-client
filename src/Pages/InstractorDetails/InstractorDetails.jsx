import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxiosSecure from '../../hook/useAxiosSecure/useAxiosSecure';
import ClassCard from '../../Sheared/ClassCard/ClassCard';

const InstractorDetails = () => {
    const data = useLoaderData();
    console.log(data, "from single");
    const [axiosSecure] = useAxiosSecure();
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (data) {
                    const res = await axiosSecure(`/classes/${data.email}`);
                    console.log('res from axios', res);
                    setClasses(res.data);
                }
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, [data, axiosSecure]);

    console.log(classes,"classwsasfvsdvds");
    return (
        <div className='my-10'>
            <img className='w-[100%] rounded-lg md:h-[70vh] mx-auto' src={data&&data.image} alt="" />
            <h1 className="text-center font-extrabold text-5xl text-success my-6">{data&&data.name}</h1>
           <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    classes && classes.map(classdata => <ClassCard key={classdata._id} popularclass={classdata}></ClassCard>)
                }
           </div>
        </div>
    );
};

export default InstractorDetails;