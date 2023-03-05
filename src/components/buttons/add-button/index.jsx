import React from 'react';
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next';

const AddButton = (props) => {
    
    const { t, i18n } = useTranslation();

    const {
        onClick
    } = props
    return (
        <button
            className={styles.shoppingCartButton}
            onClick={onClick}>
            <div className={styles.button_parent}>
                <span className={styles.basket_icon}></span>
                {t("busket-btn")}
            </div>
        </button>
    );
};

export default AddButton;