import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingLayout from './layout/LandingLayout';
import LandingView from './views/LandingView';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingLayout/>,
        children: [
            {
                path: '/',
                element: <LandingView/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);