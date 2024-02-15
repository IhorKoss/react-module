import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService={
    byPostId:(id)=>apiService.get(urls.comments.byPostId(id))
}

export {
    commentService
}