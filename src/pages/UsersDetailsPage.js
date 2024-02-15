import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";
import {UserDetails} from "../components/UserContainer/UserDetails";

const UsersDetailsPage = () => {
    const {id}=useParams();
    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {
        userService.getById(id).then(({data})=>setUserDetails(data))
    }, [id]);
    return (
        <div style={{display:'flex'}}>
            {userDetails&&<UserDetails userDetails={userDetails}/>}
            <Outlet/>
        </div>
    );
};

export {UsersDetailsPage};