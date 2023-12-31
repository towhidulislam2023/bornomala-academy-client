import React, { useContext, useEffect } from 'react';
import { FaChalkboardTeacher, FaDollarSign, FaUsers } from 'react-icons/fa';
import UseAuthorizarion from '../../hook/UseAuthorization/UseAuthorizarion';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import useAxiosSecure from '../../hook/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import UsePaymentProduct from '../../hook/UsePaymentProduct/UsePaymentProduct';
import UseCart from '../../hook/UseCart/UseCart';
import { useNavigate } from 'react-router-dom';
import UseBestInstructors from '../../hook/UseBestInstructors/UseBestInstructors';

const ClassCard = ({ popularclass }) => {
    const [instructors] = UseBestInstructors()
    const [Payclasses]=UsePaymentProduct()
    const navigate=useNavigate()
    // console.log(Payclasses);
    const [carts ,refetch]=UseCart()
    const {user}=useContext(AuthProviderContext)
    const [axiosSecure]=useAxiosSecure()
    const handelSelect=(classDetails)=>{
        if (!user) {
            navigate("/login")
            return
            
        }
        const alreadypayedcourse= Payclasses && Payclasses.find(pay=>pay._id===classDetails._id)
        if (alreadypayedcourse) {
            Swal.fire({
                icon: 'error',
                title: 'You Already Buy The Courses',
                text: 'Something went wrong!',
            })     
            return       
        }
        const alreadyAddedcourse = carts && carts.find(pay => pay.courseId ===classDetails._id)
        if (alreadyAddedcourse) {
            Swal.fire({
                icon: 'error',
                title: 'You Already Added The Courses',
                text: 'Something went wrong!',
            })     
            return       
        }
        // console.log(classDetails);
        if (user) {
            const selectedClass = { studentName: user.displayName, studentEmail: user.email, courseName: classDetails.name, courseInstructorName: classDetails.instructor, CourseBannar: classDetails.image, price: classDetails.price, instructorEmail: classDetails.email, courseId:classDetails._id}
            // console.log(selectedClass);
            axiosSecure.post("carts", selectedClass)
            .then(res=>{
                // console.log(res.data)
                if (res.data.insertedId) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `You Successfully Select ${classDetails.name} ` ,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    
                }
            })
            
        }
        

    }
    const [userRole] = UseAuthorizarion()
    const totalStudent = popularclass.totalSeats - popularclass.availableSeats 
   
    return (
        <div className={`card  ${popularclass.availableSeats === 0 ? "bg-red-100" : "bg-base-100"}  shadow-xl`}>
            <figure className="px-10 pt-10">
                <img src={popularclass.image} alt="Shoes" className="rounded-xl h-24 relative md:h-[18rem]" />
                <div className="badge absolute badge-success gap-2">
                    <span> Available Seats</span> {popularclass.availableSeats}
                </div>
            </figure>
            <div className="card-body  ">
                <h2 className="card-title text-3xl">{popularclass.name}</h2><div className="badge badge-success gap-2">
                    <span> Available Seats</span> {popularclass.availableSeats}
                </div>
                <span className='flex items-center text-2xl gap-5'><FaUsers className='text-2xl text-green-900' title='Total Students'></FaUsers> {totalStudent}</span>
                <span className='flex items-center text-2xl gap-5'><FaChalkboardTeacher className='text-2xl text-green-900' title='Instructor'></FaChalkboardTeacher> {popularclass.instructor}</span>
                <span className='flex items-center text-2xl gap-5'><FaDollarSign className='text-2xl text-green-900' title='Instructor'></FaDollarSign> {popularclass.price}</span>
                <div className="card-actions mt-auto">
                    <button onClick={() => handelSelect(popularclass)} disabled={popularclass.availableSeats === 0 || userRole === "admin" || userRole === "instructor"} className="btn btn-block  btn-success">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;