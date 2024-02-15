import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id,name,username,email,phone,website}=userDetails;
    const navigate=useNavigate()
    return (
        <div>
            <h2>ID:{id}. {username}({email})</h2>
            <h3>Name:{name}, phone: {phone}, {website}</h3>
            <button onClick={()=>navigate('posts')}>DETAILS</button>
        </div>
    );
};

export {UserDetails};