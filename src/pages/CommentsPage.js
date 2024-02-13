import {Comments} from "../components/commentsContainer/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div style={{display:'flex'}}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};