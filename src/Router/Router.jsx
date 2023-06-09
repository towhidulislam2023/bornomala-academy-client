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
import InstructorsRoute from "./InstructorsRoute/InstructorsRoute";
import ManageAllClasses from "../Pages/DashBoard/ManageAllClasses/ManageAllClasses";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";

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
                element: <Instructor></Instructor>
            },
            {
                path: "/classes/:id",
                element: <InstractorDetails></InstractorDetails>,
                loader: ({ params }) => fetch(`https://bornomala-academy-server.vercel.app/instructors/${params.id}`)

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
        path: "/dashboard",
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard/selectedClasses",
                element: <PrivateRoute> <SelectedClasses></SelectedClasses></PrivateRoute>,
            },
            {
                path: "/dashboard/enrolledClasses",
                element: <PrivateRoute><EnrolledClasses></EnrolledClasses></PrivateRoute>,
            },
            {
                path: "/dashboard/paymenthistory",
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>,
            },
            {
                path: "/dashboard/manageUsers",
                element: <AdminRoute><ManageUser></ManageUser></AdminRoute>,
            },
            {
                path: "/dashboard/manageallclasses",
                element: <AdminRoute><ManageAllClasses></ManageAllClasses></AdminRoute>,
            },
            {
                path: "/dashboard/manageClasses",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
            },
            {
                path: "/dashboard/addAClass",
                element: <InstructorsRoute><AddClass></AddClass></InstructorsRoute>,
            },
            {
                path: "/dashboard/myClasses",
                element: <InstructorsRoute><MyClasses></MyClasses></InstructorsRoute>,
            },
            {
                path: "/dashboard/payment",
                element: <Payment></Payment>,
            },

        ]
    }
]);
export default router