import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Error from "../pages/Error/Error";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToys/AllToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addtoy',
                element: <AddToy></AddToy>
            },
            {
                path: '/alltoys',
                element: <AllToy></AllToy>,
                loader: () => fetch('http://localhost:5000/allgacdata')
            }
        ]
    },
]);

export default router;