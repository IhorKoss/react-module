import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {episodeService} from "../services/episodeService";
import {Characters} from "../components/Characters/Characters";

const CharactersPage = () => {
    const {id}=useParams();
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        episodeService.byId(id).then(({data})=>setCharacters(data.characters))
    }, []);
    return (
        <div>
            {characters&&<Characters characters={characters}/>}
        </div>
    );
};

export {CharactersPage};