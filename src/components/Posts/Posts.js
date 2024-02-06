import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";
import css from './Posts.module.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null)
    useEffect(() => {
        postService.getAll().then(({data})=>setPosts(data))
    }, []);
    const getPost=(post)=>{
        setPostDetails(post)
    }
    return (
        <div className={css.Posts}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} getPost={getPost}/>)}
            </div>
            <div className={css.Details}>
                {postDetails &&<PostDetails postDetails={postDetails}/>}
            </div>
        </div>

    );
};

export {Posts};