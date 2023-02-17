import React from 'react';
import styles from './styles.module.css'

const WishlistButton = (props) => {
    const {
        onClick
    } = props

    return (
        <div className={styles.wishlist_main_button}>

            <button onClick={onClick} className={styles.wishlist_button}></button>

        </div>

    )
};

export default WishlistButton;