import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Characters} from "../components/Characters/Characters";
import {charactersActions} from "../store/slices/charactersSlice";

const CharactersPage = () => {
    const {id}=useParams();
    const dispatch=useDispatch();
    const {episode}=useSelector(state => state.characters)
    useEffect(() => {
        dispatch(charactersActions.getById(id))
    }, []);
    return (
        <div>
            {episode.length>0&&<Characters/>}
        </div>
    );
};

export {CharactersPage};