import React from 'react';
import styles from './style.module.css'
import { useTranslation } from 'react-i18next';


const LanguageBtn = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className={styles.language_box}>
            <button className={styles.language_btn} onClick={() => changeLanguage("en")}>EN</button>
            <button className={styles.language_btn} onClick={() => changeLanguage("ru")}>RU</button>
        </div>
    );
};


export default LanguageBtn;