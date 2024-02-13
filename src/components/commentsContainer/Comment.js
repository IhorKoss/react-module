import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId,id,name,email,body} = comment;
    const navigate=useNavigate()
    return (
        <div>
            <button onClick={()=>navigate('posts',{state:{postId}})}>Post ID: {postId}</button>
            <div>Comment №{id}. {name} (email: {email})</div>
            <div>{body}</div>
            <hr/>
        </div>
    );
};

export {Comment};