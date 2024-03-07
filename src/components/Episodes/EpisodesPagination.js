import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.episodes);
    const [, setQuery] = useSearchParams({page:'1'});
    const prev = () => {
        setQuery(value => {
            value.set('page', `${+value.get('page') - 1}`)
            return value
        })
    }

    const next = () => {
        setQuery(value => {
            value.set('page', `${+value.get('page') + 1}`)
            return value
        })
    }
    return (
        <div>
            <button
                style={{width:'8vw', height:'3vh'}}
                disabled={!prevPage}
                onClick={prev}
            >prev</button>
            <button
                style={{width:'8vw', height:'3vh'}}
                disabled={!nextPage}
                onClick={next}
            >next</button>
        </div>
    );
};

export {EpisodesPagination};