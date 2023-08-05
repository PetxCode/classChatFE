import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/auth/Register'
import SignIn from '../pages/auth/SignIn'


export const mainRouter = createBrowserRouter([
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },

    // {
    //     path: "/",
    //     element: <PrivateRoute>
    //         <Layout />
    //     </PrivateRoute>,
    //     children: [
    //         {
    //             index: true,
    //             element: <HomePage />,
    //         },
    //         {
    //             index: true,
    //             path: "/create-article",
    //             element: <CreateArticle />,
    //         },
    //         {
    //             index: true,
    //             path: "/view-authors",
    //             element: <ViewAuthor />,
    //         },
    //         {
    //             index: true,
    //             path: "/view-request",
    //             element: <ViewRequest />,
    //         },
    //         {
    //             index: true,
    //             path: "/view-friends",
    //             element: <ViewFriends />,
    //         },
    //     ]
    // }
])