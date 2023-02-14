import React from 'react';
import styles from './style.module.css'
const ShoppingCartButton = (props) => {
    return (
        <div>
                <button  className={styles.button}>{props.countCartItems}</button>
        </div>
    );
};

export default ShoppingCartButton;