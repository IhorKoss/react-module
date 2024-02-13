const Todo = ({todo}) => {
    const {userId,id,title,completed}=todo;

    return (
        <div>
            <div>User(id): {userId}</div>
            <div>{id}. {title}</div>
            <div>Status: {completed==true?'true':'false'}</div>
            <hr/>
        </div>
    );
};

export {Todo};