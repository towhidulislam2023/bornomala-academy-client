import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/authenticationPages/Login/Login";
import Signup from "../Pages/authenticationPages/signup/Signup";
import Classes from "../Pages/Classes/Classes";
import InstractorDetails from "../Pages/InstractorDetails/InstractorDetails";
import Instructor from "../Pages/Instructor/Instructor";
import DashBoardLayout from "../Layouts/DashBoardLayout/DashBoardLayout";
import SelectedClasses from "../Pages/DashBoard/SelectedClasses/SelectedClasses";
import Payment from "../Pages/DashBoard/Payment/Payment";
import ManageUser from "../Pages/DashBoard/ManageUser/ManageUser";
import ManageClasses from "../Pages/DashBoard/ManageClasses/ManageClasses";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import MyClasses from "../Pages/DashBoard/MyClasses/MyClasses";
import EnrolledClasses from "../Pages/DashBoard/EnrolledClasses/EnrolledClasses";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/classes",
                element: <Classes></Classes>
            },
            {
                path: "/instructors",
                element:<Instructor></Instructor>
            },
            {
                path: "/classes/:id",
                element:<InstractorDetails></InstractorDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/instructors/${params.id}`)
                
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },

        ]
    },
    {
        path:"/dashboard",
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children:[
        {
            path: "/dashboard/selectedClasses",
            element: <SelectedClasses></SelectedClasses>,
        },
        {
            path: "/dashboard/enrolledClasses",
            element: <EnrolledClasses></EnrolledClasses>,
        },
        {
            path: "/dashboard/manageUsers",
            element: <AdminRoute><ManageUser></ManageUser></AdminRoute> ,
        },
        {
            path: "/dashboard/manageClasses",
            element: <ManageClasses></ManageClasses>,
        },
        {
            path: "/dashboard/addAClass",
            element: <AddClass></AddClass>,
        },
        {
            path: "/dashboard/myClasses",
            element: <MyClasses></MyClasses>,
        },
        {
            path: "/dashboard/payment",
            element: <Payment></Payment>,
        },
    
    ]
    }
]);
export default router