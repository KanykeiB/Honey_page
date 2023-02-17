import React from 'react';
import styles from './styles.module.css'

const AddButton = (props) => {
    const {
        onClick
    } = props
    return (
        <button
            className={styles.shoppingCartButton}
            onClick={onClick}>
            <div className={styles.button_parent}>
                <span className={styles.basket_icon}></span>
                В Корзину
            </div>
        </button>
    );
};

export default AddButton;