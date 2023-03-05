
import React, {useEffect} from 'react';
import styles from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {shoppingCartList} from "../../../redux/selectors/selectors";
import {addQuantityCart, removeFromShoppingCart, addToShoppingCart, decreaseQuantityCart} from "../../../redux/actions/actions";
import honey_image from "../../../shared/icons/Group1.png"
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';



const Basket = () => {
    const cart = useSelector(shoppingCartList)
    // const items=JSON.parse(localStorage.getItem('cart'))
    const totalPrice = cart.reduce((acc, c) => acc + c.quantity * c.price, 0);
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation();
    console.log(cart)

    const handleAddButton = (item) => {
        if (!!cart.length) {
            const cartItem = cart?.find(({id}) => id === item.id)
            if (cartItem?.id === item?.id) {
                dispatch(addQuantityCart(cartItem))
            } else {
                dispatch(addToShoppingCart(item))
            }
        } else {
            dispatch(addToShoppingCart(item))
        }

    }

    console.log(cart, 'cartLocal')

    const handleRemoveButton = (item) => {
        if (!!cart.length) {
            const cartItem = cart?.find(({id}) => id === item.id)
            if (cartItem?.quantity > 1) {
                dispatch(decreaseQuantityCart(cartItem))

            } else {
                dispatch(removeFromShoppingCart(item))
            }
        } else {
            dispatch(removeFromShoppingCart(item))
        }
    }
    const handleFullRemove = (item) => {
        dispatch(removeFromShoppingCart(item))
    }

    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.shopping_cart_title}>{t("busket")}</h1>
                {cart.length === 0 && <div className={styles.empty_list}>
                    <p>{t("busket-empty")}.</p>
                    <Link to = '/'><span className={styles.arrow_back}></span></Link>
                <span className={styles.empty_list_description}>{t("busket-text")} <b><Link to ='/honeys'>{t("range2")}.</Link></b></span>
                </div>}
                {cart.map((item) => (
                    <div className={styles.background_div} key={item.id}>

                        <div className={styles.shopping_cart_main_div}>
                            <div>
                                <img className={styles.honey_image_shopping_cart} src={honey_image} alt="Honey"/>
                            </div>
                            <div className={styles.content_block}>
                                <button
                                    className={styles.remove_icon}
                                    onClick={() => {
                                        handleFullRemove(item)
                                    }}>
                                </button>
                                <div className={styles.cart_name}>{item.name}</div>
                                <div className={styles.cart_weight}>{item.weight}</div>
                                <div className={styles.cart_price}>{item.price} {t("price")}</div>
                                <div className={styles.cart_buttons}>
                                    <button
                                        onClick={() => handleRemoveButton(item)}
                                        className={styles.remove_button}>
                                        <span className={styles.minus_icon}></span>
                                    </button>
                                    <div className={styles.cart_quantity}>{item.quantity}</div>
                                    <button
                                        onClick={() => handleAddButton(item)}
                                        className={styles.add_button}>
                                        <span className={styles.add_icon}></span>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                ))}


                {cart.length !== 0 && (
                    <>
                        <div className={styles.total_price}>
                            <span className={styles.total_price_text}>
                                <span className={styles.Itogo}>{t("total")} : </span>
                                <span className={styles.total_price_span}>{totalPrice} {t("price")}</span>
                            </span>
                        </div>
                        <div className={styles.checkout_div}>
                            <button className={styles.checkout}>
                            <Link className={styles.links_item} to='/checkout'>{t("busket-checkout")}</Link>
                                
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Basket;