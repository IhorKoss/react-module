import {Outlet} from "react-router-dom";
import {Users} from "../components/UserContainer/Users";
import {PostsPage} from "./PostsPage";

const UsersPage = () => {
    return (
        <div style={{display:"flex"}}>
            <Users/>
            <hr/>
            <PostsPage/>
        </div>
    );
};

export {UsersPage};