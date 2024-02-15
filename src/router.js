import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UsersDetailsPage} from "./pages/UsersDetailsPage";
import {PostsPage} from "./pages/PostsPage";
import {PostsDetailsPage} from "./pages/PostsDetailsPage";
import {CommentsPage} from "./pages/CommentsPage";

const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>,children:[
            {
                index:true,element:<Navigate to={'users'}/>
            },
            {
                path:'users',element:<UsersPage/>
            },
            {
                path:'users/:id',element:<UsersDetailsPage/>, children:[
                    {
                        path:'posts',element:<PostsPage/>
                    }
                ]
            },
            {
                path:'users/:id/posts/:postId',element:<PostsDetailsPage/>,children:[
                    {
                        path: 'comments',element:<CommentsPage/>
                    }
                ]
            }
        ]

    }
])

export {
    router
}