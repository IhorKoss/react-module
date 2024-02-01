const Rickmorty = ({character}) => {
    const {id,name,status,species,gender,image}=character;
    return (
        <div>
            <h1>{id}. {name} is {status}</h1>
            <h3>Species: {species}</h3>
            <h3>Gender: {gender}</h3>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Rickmorty};