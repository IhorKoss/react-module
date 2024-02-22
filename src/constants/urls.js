const baseURL='https://rickandmortyapi.com/api'

const episode='/episode'
const character='/character'

const urls={
    episode:{
        base:`${episode}`,
        byId:(id)=>`${episode}/${id}`
    },
    character:{
        base: `${character}`,
        byId:(id)=>`${character}/${id}`
    }
}

export {
    baseURL,urls
}