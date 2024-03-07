import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "./Episode";
import {episodesActions} from "../../store/slices/episodesSlice";


const Episodes = () => {
    const dispatch=useDispatch();
    const {episodes}=useSelector(state => state.episodes)
    const [query, ] = useSearchParams({page:'1'})
    const page=query.get('page')

    useEffect(() => {
        dispatch(episodesActions.getAll(page));
    }, [page]);

    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
            {episodes.map(episode=><Episode key={episode.id} ep={episode}/>)}
        </div>
    );
};

export {Episodes};