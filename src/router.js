import {createBrowserRouter, Navigate} from "react-router-dom";

import {TodosPage} from "./pages/TodosPage";
import {MainLayout} from "./layouts/MainLayout";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {ErrorPage} from "./pages/ErrorPage";
import {PostsPage} from "./pages/PostsPage";

const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>, errorElement:<ErrorPage/>, children:[
            {
                index:true,element:<Navigate to={'albums'}/>
            },
            {
                path:'todos',element:<TodosPage/>
            },
            {
                path:'albums',element:<AlbumsPage/>
            },
            {
                path:'comments',element:<CommentsPage/>,children:[
                    {
                        path:'posts',element:<PostsPage/>
                    }
                ]
            }
        ]
    }
])

export{
    router
}