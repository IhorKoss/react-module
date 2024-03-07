import {useDispatch} from "react-redux";

import {Episodes} from "../components/Episodes/Episodes";
import {EpisodesPagination} from "../components/Episodes/EpisodesPagination";
import {charactersActions} from "../store/slices/charactersSlice";

const EpisodesPage = () => {
    const dispatch = useDispatch();
    dispatch(charactersActions.setEpName())
    return (
        <div>
            <Episodes/>
            <EpisodesPagination/>
        </div>
    );
};

export {EpisodesPage};