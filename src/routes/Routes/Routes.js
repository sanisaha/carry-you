import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import AddService from "../../pages/AddService/AddService";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home/Home";
import AllServices from "../../pages/Home/Services/AllServices";
import ServiceDetailCard from "../../pages/Home/Services/ServiceDetailCard";
import MyReviews from "../../pages/MyReviews/MyReviews";
import EditReview from "../../pages/others/EditReview/EditReview";
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
            },
            {
                path: '/services/:id',
                element: <ServiceDetailCard></ServiceDetailCard>,
                loader: ({ params }) => fetch(`https://carry-you-server.vercel.app/services/${params.id}`)
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
                loader: ({ params }) => fetch(`https://carry-you-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <EditReview></EditReview>,
                loader: ({ params }) => fetch(`https://carry-you-server.vercel.app/review/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            }
        ]
    }
]);

export default routes;