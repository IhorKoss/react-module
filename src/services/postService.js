import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService={
    byId:(id)=>apiService.get(urls.posts.byId(id)),
    byUserId:(id)=>apiService.get(urls.posts.byUserId(id))
}

export {
    postService
}