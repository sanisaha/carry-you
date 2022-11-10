import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import AllServices from "../../pages/Home/Services/AllServices";
import ServiceDetailCard from "../../pages/Home/Services/ServiceDetailCard";
import MyReviews from "../../pages/MyReviews/MyReviews";
import ReviewForm from "../../pages/others/ReviewForm/ReviewForm";
import Login from "../../pages/UserCredentials/Login/Login";
import Signup from "../../pages/UserCredentials/Signup/Signup";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetailCard></ServiceDetailCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Signup></Signup>
            },
            {
                path: '/reviewform/:id',
                element: <ReviewForm></ReviewForm>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            }
        ]
    }
]);

export default routes;