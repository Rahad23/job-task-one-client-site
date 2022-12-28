import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/errorPage/ErrorPage";
import Home from "../component/home/Home";
import LoginForm from "../component/loginRegistration/loginForm/LoginForm";
import Registration from "../component/loginRegistration/registration/Registration";
import Midia from "../component/midia/Midia";
import Main from "../main/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/media',
                element: <Midia></Midia>
            }
        ]
    },
    {
        path:'/login',
        element:<LoginForm></LoginForm>
    },
    {
        path:'/register',
        element: <Registration></Registration>
    }
])