import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/authenticationPages/Login/Login";
import Signup from "../Pages/authenticationPages/signup/Signup";
import Classes from "../Pages/Classes/Classes";
import InstractorDetails from "../Pages/InstractorDetails/InstractorDetails";
import Instructor from "../Pages/Instructor/Instructor";

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
]);
export default router