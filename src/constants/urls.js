const baseURL='https://jsonplaceholder.typicode.com/';

const albums='/albums';
const comments='/comments';
const todos='/todos';
const urls={
    albums:{
        base:albums
    },
    comments:{
        base: comments,
        getPostById:(id)=>`/posts/${id}`
    },
    todos:{
        base:todos
    }
}

export {
    baseURL,urls
}