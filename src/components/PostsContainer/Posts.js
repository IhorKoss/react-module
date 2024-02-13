import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentsService} from "../../services/commentsService";
import {Post} from "./Post";

const Posts = () => {
    const {state:{postId}}=useLocation()
    const [post, setPost] = useState([])

    useEffect(() => {
        commentsService.getPostById(postId).then(({data})=>setPost(data));
    }, [postId]);
    return (
        <div>
            <Post post={post}/>
        </div>
    );
};

export {Posts};