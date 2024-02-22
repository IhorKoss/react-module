import {useEffect, useState} from "react";
import {characterService} from "../../services/characterService";
import {Character} from "./Character";
import {json, useSearchParams} from "react-router-dom";

const Characters = ({characters}) => {
    const charArr=characters.map(character=>character.slice(-4))
    const charIds=JSON.stringify(charArr.map(character=>+character.replace(/\D/g,'')))
    const [charactersArray, setCharactersArray] = useState([])
    console.log(charIds)
    useEffect(() => {
        characterService.byId(charIds).then(({data})=>setCharactersArray(data))
    }, []);
    console.log(charactersArray)

    return (
        <div>
            <button>PREV</button>
            <button>NEXT</button>
            {charactersArray.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};