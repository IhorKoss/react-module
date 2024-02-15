import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentService} from "../services/commentService";
import {Comment} from "../components/CommentsContainer/Comment";

const CommentsPage = () => {
    const {postId}=useParams();
    const [comments, setComments] = useState([])
    useEffect(() => {
        commentService.byPostId(postId).then(({data})=>setComments(data));
    }, [postId]);
    return (
        <div>
            <hr/>
            {comments&&comments.map(comment=><Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export {CommentsPage};