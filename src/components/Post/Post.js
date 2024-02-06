const Post = ({post, getPost}) => {
    const {id,title} = post;
    return (
        <div>
            <div>{id}. {title}</div>
            <button onClick={()=>getPost(post)}>Details</button>
        </div>
    );
};

export {Post};