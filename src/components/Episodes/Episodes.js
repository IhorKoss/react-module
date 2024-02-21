import {useEffect, useState} from "react";

import {episodeService} from "../../services/episodeService";
import {Episode} from "./Episode";
import css from './episode.module.css';
import {useSearchParams} from "react-router-dom";


const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const [query, setQuery] = useSearchParams({page:'1'})
    const [page, setPage] = useState({prev:null,next:null})
    
    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data})=> {
            setEpisodes(data.results)
            if(!data.info.prev){
                setPage({prev:null,next:data.info.next.slice(-1)})
            }
            if(!data.info.next){
                setPage({prev:data.info.prev.slice(-1),next:null})
            }
        })
    }, [query.get('page')]);
    const prev=()=>{
        setQuery(prev => {
            prev.set('page',(+prev.get('page')-1).toString())
            return prev
        })
    }

    const next=()=>{
        setQuery(prev => {
            prev.set('page',(+prev.get('page')+1).toString())
            return prev
        })
    }
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
            {episodes.map(episode=><Episode key={episode.id} ep={episode}/>)}
            <button
                style={{width:'8vw', height:'3vh'}}
                disabled={!page.prev}
                onClick={prev}
            >prev</button>
            <button
                style={{width:'8vw', height:'3vh'}}
                disabled={!page.next}
                onClick={next}
            >next</button>
        </div>
    );
};

export {Episodes};