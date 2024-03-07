import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Character} from "./Character";
import {charactersActions} from "../../store/slices/charactersSlice";

const Characters = () => {
    const {episode,characters}=useSelector(state => state.characters)
    const dispatch=useDispatch();
    const charArr=episode.map(character=>character.slice(-4))
    const charIds=JSON.stringify(charArr.map(character=>+character.replace(/\D/g,'')))
    useEffect(() => {
        dispatch(charactersActions.getCharacters(charIds))
    }, []);
    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};