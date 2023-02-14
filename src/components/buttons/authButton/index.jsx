import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

const AuthButton = () => {
    return (
        <button className={styles.authButton}>
            <Link to='/sign-in'
                className={styles.authLink1}
            >Вход/</Link>

            <Link to='/sign-up'
                className={styles.authLink2}
            >Регистрация</Link>
        </button>
    );
};

export default AuthButton;