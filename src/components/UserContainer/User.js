const User = ({user}) => {
    const {id,name,username,email,address:{street,suite,city,zipcode,geo:{lat,lng}}}=user
    return (
        <div>
            <div>{id}. {name}(username: {username})</div>
            <div>{email}</div>
            <div>{street} {suite}, {city}({zipcode}), GEOLOCATION: lat:{lat}, lng:{lng}</div>
            <hr/>
        </div>
    );
};

export {User};