import {useSelector} from "react-redux";

import css from './Header.module.css';
const Header = () => {
    const {episodeName}=useSelector(state => state.characters)
    return (
        <div className={css.Header}>
            {episodeName?episodeName:'Rick & Morty'}
        </div>
    );
};

export {Header};