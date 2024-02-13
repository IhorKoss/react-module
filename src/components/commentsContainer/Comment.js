const Comment = ({comment}) => {
    const {postId,id,name,email,body} = comment
    return (
        <div>
            <div><a href="">Post ID: {postId}</a></div>
            <div>Comment №{id}. {name} (email: {email})</div>
            <div>{body}</div>
            hr
        </div>
    );
};

export {Comment};