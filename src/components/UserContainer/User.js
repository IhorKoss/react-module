import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name}=user
    const navigate = useNavigate()
    return (
        <div>
            <h3>ID:{id}. {name}</h3>
            <button onClick={()=>navigate(id.toString(),{state:{user}})}>DETAILS</button>
            <hr/>
        </div>
    );
};

export {User};