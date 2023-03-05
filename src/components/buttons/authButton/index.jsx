import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

import { useTranslation } from 'react-i18next';


const AuthButton = () => {
    const { t, i18n } = useTranslation();
    return (
        <button className={styles.authButton}>
            <Link to='/sign-in'
                className={styles.authLink1}
            >{t("sign-in")}/</Link>

            <Link to='/sign-up'
                className={styles.authLink2}
            >{t("sign-up")}</Link>
        </button>
    );
};

export default AuthButton;