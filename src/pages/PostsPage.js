import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../services/postService";
import {PostsDetails} from "../components/PostContainer/PostDetails";

const PostsPage = () => {
    const {id}=useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.byUserId(id).then(({data})=>setPosts(data))
    }, [id]);
    return (
        <div>
            {posts&&posts.map(post=><PostsDetails key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsPage};