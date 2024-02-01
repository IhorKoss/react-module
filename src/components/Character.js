const Character = ({simpson}) => {
    const {name,surname,age,photo}=simpson;
    return (
        <div>
            <h1>{name} {surname}</h1>
            <h3>Age: {age}</h3>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Character};