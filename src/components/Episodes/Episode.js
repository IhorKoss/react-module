import css from './episode.module.css';

const Episode = ({ep}) => {
    const {id,name, episode}=ep
    return (
        <div className={css.container}>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Chapter: {episode}</p>
            <button>See characters</button>
        </div>
    );
};

export {Episode};