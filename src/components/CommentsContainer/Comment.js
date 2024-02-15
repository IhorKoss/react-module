const Comment = ({comment}) => {
    const {postId,id,name,email,body}=comment
    return (
        <div>
            <div>Post ID: {postId}</div>
            <div>{id}. {name}({email})</div>
            <div>{body}</div>
            <hr/>
        </div>
    );
};

export {Comment};