const Album = ({album}) => {
    const {userId,id,title}=album
    return (
        <div>
            <div>User ID: {userId}</div>
            <div>{id}. {title}</div>
            <hr/>
        </div>
    );
};

export {Album};