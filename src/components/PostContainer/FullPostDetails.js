import {useNavigate} from "react-router-dom";

const FullPostDetails = ({post}) => {
    const {userId,id,title,body}=post
    const navigate=useNavigate()
    return (
        <div>
            <h2>{title}</h2>
            <h3>User ID: {userId}, Post ID: {id}</h3>
            <h4>{body}</h4>
            <button onClick={()=>navigate('comments')}>Comments</button>
        </div>
    );
};

export {FullPostDetails};