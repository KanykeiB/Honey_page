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
                В Корзину</button>
    );
};

export default AddButton;