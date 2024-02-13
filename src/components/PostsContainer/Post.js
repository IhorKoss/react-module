const Post = ({post}) => {
    const {id,userId,title,body}=post;
    return (
        <div>
            <div>User ID: {userId}</div>
            <div>Post №{id}. {title}</div>
            <div>{body}</div>
        </div>
    );
};

export {Post};