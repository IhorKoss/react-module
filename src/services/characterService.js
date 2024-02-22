import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const characterService={
    byId:(id)=>apiService.get(urls.character.byId(id)),
}

export {characterService}