import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Login from '../Login/Login';
import Register from '../Pages/Register/Register';
import Career from '../Pages/Career/Career';
import About from '../Pages/About/About';

const routs = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children :[
            {
                path: "/",
                element:<Home></Home>,
                
                loader : () => fetch("news.json")
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
               path:"/register",
               element: <Register></Register>
            },
            {
                path: "/career",
                element:<Career></Career>
            },
            {
                path: "/about",
                element: <About></About>
            },
        ]
    }
])



export default routs;