import React from 'react';
import styles from './styles.module.css'

const WishlistButtonHeader = () => {
    return (
        <div className={styles.wishlist_parent}>
            <button className={styles.wishlist_button}></button>
        </div>
    )
};

export default WishlistButtonHeader;