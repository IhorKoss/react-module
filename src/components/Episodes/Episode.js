import {useNavigate} from "react-router-dom";

import css from './episode.module.css';

const Episode = ({ep}) => {
    const {id,name, episode}=ep
    const navigate=useNavigate()
    return (
        <div className={css.container}>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Chapter: {episode}</p>
            <button onClick={()=>navigate(`${id.toString()}/characters`)}>See characters</button>
        </div>
    );
};

export {Episode};