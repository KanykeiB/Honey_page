import React, {useState} from 'react';
import styles from './styles.module.css'

const WishlistButton = (props) => {
    const {
        onClick,
        className
    } = props
    const [like, setLike] = useState(false)
    const handleLikeButton = () => {
        setLike (!like)
    }

    return (
        <div className={styles.wishlist_main_button}>

            <button onClick={onClick} className={className}></button>

        </div>

    )
};

export default WishlistButton;