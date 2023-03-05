import React from 'react';
import styles from './styles.module.css'
import {Link} from 'react-router-dom';
import ShoppingCartButton from '../../containers/shopping-cart/shopping-cart-button/shopping-cart-button';
import AuthButton from '../buttons/authButton';
import WishlistButtonHeader from "../buttons/wishlist-button-header";

import { useTranslation } from 'react-i18next';




const Header = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.burger}>
                    <input className={styles.burger_tog} id={'burger_toggle'} type={"checkbox"}/>
                    <label className={styles.burger_btn} htmlFor={'burger_toggle'}>
                        <span className={styles.burger_span}></span>
                    </label>
                    <div className={styles.burger_box}>
                        <Link className={styles.burger_links_item} to='/honeys'>{t("range")}</Link>
                        <Link className={styles.burger_links_item} to='/blog'>{t("blog")}</Link>
                        <Link className={styles.burger_links_item} to='/delivery'>{t("delivery")}</Link>
                        <Link className={styles.burger_links_item} to='/about-us'>{t("about-us")}</Link>
                        <Link className={styles.burger_links_item} to='/contact-us'>{t("about-us")}</Link>
                        <Link className={styles.burger_links_item_auth} to='/sign-in'>{t("sign-in")}</Link>
                        <Link className={styles.burger_links_item_auth} to='/sign-up'>{t("sign-up")}</Link>
                    </div>
                </div>

                <Link className={styles.links_item} to='/'>
                    <div className={styles.logo_parent}>
                        <div className={styles.logo}></div>
                    </div>
                </Link>

                <div className={styles.links}>
                    <Link className={styles.links_item} to='/honeys'>{t("range")}</Link>
                    <Link className={styles.links_item} to='/blog'>{t("blog")}</Link>
                    <Link className={styles.links_item} to='/delivery'>{t("delivery")}</Link>
                    <Link className={styles.links_item} to='/about-us'>{t("about-us")}</Link>
                    <Link className={styles.links_item} to='/contact-us'>{t("contacts")}</Link>
                    <Link className={styles.links_item_auth} to='/sign-in'>{t("sign-in")}</Link>
                    <Link className={styles.links_item_auth} to='/sign-up'>{t("sign-up")}</Link>
                    {/*<Link className={styles.links_item} to='/checkout'>test</Link>*/}
                </div>
                <div className={styles.icons}>
                    <Link className={styles.wish_list_icon} to='/wishlist'><WishlistButtonHeader/></Link>
                    <Link className={styles.shopping_cart_icon} to='/shopping-cart'><ShoppingCartButton/></Link>
                </div>
            </header>
        </div>
    );
};

export default Header;