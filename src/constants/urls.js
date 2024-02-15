const baseURL='https://jsonplaceholder.typicode.com';

const users='/users';
const posts='/posts';
const comments='/comments';

const urls={
    users:{
        base:`${users}`,
        byId:(id)=>`${users}/${id}`
    },
    posts:{
        base:`${posts}`,
        byId:(id)=>`${posts}/${id}`,
        byUserId:(id)=>`${users}/${id}/${posts}`
    },
    comments:{
        base:`${comments}`,
        byPostId:(id)=>`${posts}/${id}/${comments}`
    }
}

export {
    baseURL,urls
}