const PostDetails = ({postDetails}) => {
    const {id, title,body} = postDetails;
    return (
        <div>
            <div>{id}: {title}</div>
            <div>{body}</div>
        </div>
    );
};

export {PostDetails};