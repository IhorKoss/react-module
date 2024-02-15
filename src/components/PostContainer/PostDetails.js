import {useNavigate} from "react-router-dom";

const PostsDetails = ({post}) => {
    const {id,title}=post;
    const navigate=useNavigate()

    return (
        <div>
            <h5>{title}</h5>
            <button onClick={()=>navigate(id.toString())}>Post Details</button>
        </div>
    );
};

export {PostsDetails};