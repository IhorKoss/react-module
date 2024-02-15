import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../services/postService";
import {FullPostDetails} from "../components/PostContainer/FullPostDetails";

const PostsDetailsPage = () => {
    const {postId}=useParams();
    const [post, setPost] = useState(null)

    useEffect(() => {
        postService.byId(postId).then(({data})=>setPost(data))
    }, [postId]);
    return (
        <div>
            {post&&<FullPostDetails post={post}/>}
            <Outlet/>
        </div>
    );
};

export {PostsDetailsPage};