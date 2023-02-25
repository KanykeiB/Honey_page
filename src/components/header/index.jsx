import React from 'react';
import styles from './styles.module.css'
import {Link} from 'react-router-dom';
import WishlistButton from '../buttons/wishlist-button';
import ShoppingCartButton from '../../containers/shopping-cart/shopping-cart-button/shopping-cart-button';
import AuthButton from '../buttons/authButton';
import WishlistButtonHeader from "../buttons/wishlist-button-header";

const Header = () => {
    return (
        <div>
            <header className={styles.header}>

                <Link className={styles.links_item} to='/'>
                    <div className={styles.logo}></div>
                </Link>

                <div className={styles.links}>
                    <Link className={styles.links_item} to='/honeys'>Ассортимент</Link>
                    <Link className={styles.links_item} to='/blog'>Блог</Link>
                    <Link className={styles.links_item} to='/delivery'>Доставка и оплата</Link>
                    <Link className={styles.links_item} to='/about-us'>О нас</Link>
                    <Link className={styles.links_item} to='/contact-us'>Контакты</Link>
                    {/* <Link className={styles.links_item} to='/test'>test</Link> */}
                </div>
                <div className={styles.icons}>
                    <Link to='/wishlist'><WishlistButtonHeader/></Link>
                    <Link to='/shopping-cart'><ShoppingCartButton/></Link>
                    <AuthButton/>
                </div>
            </header>
        </div>
    );
};

export default Header;