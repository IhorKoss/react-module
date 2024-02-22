const Character = ({character}) => {
    const {id,name,image}=character;
    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div><img src={image} alt="name"/></div>
        </div>
    );
};

export {Character};