import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Checkout from "../../Pages/Checkout/Checkout";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";

import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter

    ([
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
                    element: <Services></Services>
                },
                {
                    path: '/blogs',
                    element: <Blogs></Blogs>
                },
                {
                    path: '/faq',
                    element: <Faq></Faq>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/checkout',
                    element: <Checkout></Checkout>
                },
            ]
        }
    ])

export default router;