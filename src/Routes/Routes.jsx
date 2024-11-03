import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Login from '../Login/Login';
import Register from '../Pages/Register/Register';

const routs = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children :[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
               path:"/register",
               element: <Register></Register>
            },
        ]
    }
])



export default routs;