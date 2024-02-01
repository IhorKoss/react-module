import {Character} from "./components/Character";
import {Rickmorty} from "./components/Rickmorty";

const App = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Bart',
            surname: 'Simpson',
            age: 10,
            photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            id: 2,
            name: 'Homer',
            surname: 'Simpson',
            age: 40,
            photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            id: 3,
            name: 'Marge',
            surname: 'Simpson',
            age: 38,
            photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            id: 4,
            name: 'Lisa',
            surname: 'Simpson',
            age: 9,
            photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        },
        {
            id: 5,
            name: 'Maggie',
            surname: 'Simpson',
            age: 1,
            photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        },
    ];
    const rickmorty=[
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            "id": 2,
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
            "id": 3,
            "name": "Summer Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
            "id": 4,
            "name": "Beth Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
        {
            "id": 5,
            "name": "Jerry Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        },
        {
            "id": 6,
            "name": "Abadango Cluster Princess",
            "status": "Alive",
            "species": "Alien",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        }];
    return (
        <div>
            {simpsons.map(simpson=><Character simpson={simpson} key={simpson.id}/>)}
            {rickmorty.map(character=><Rickmorty character={character} key={character.id}/>)}
        </div>
    );
};

export {App};