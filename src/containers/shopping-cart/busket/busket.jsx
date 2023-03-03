
import React, {useEffect} from 'react';
import styles from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {shoppingCartList} from "../../../redux/selectors/selectors";
import {addQuantityCart, removeFromShoppingCart, addToShoppingCart, decreaseQuantityCart} from "../../../redux/actions/actions";
import honey_image from "../../../shared/icons/Group1.png"
import {Link} from "react-router-dom";
const Basket = () => {
    const cart = useSelector(shoppingCartList)
    const totalPrice = cart.reduce((acc, c) => acc + c.quantity * c.price, 0);
    const dispatch = useDispatch()
    console.log(cart)

    const handleAddButton = (item) => {
        console.log('lol')
        if (!!cart.length) {
            const cartItem = cart?.find(({id}) => id === item.id)
            if (cartItem?.id === item?.id) {
                dispatch(addQuantityCart(cartItem))
                localStorage.setItem('cartItems', JSON.stringify(cartItem))
            } else {
                dispatch(addToShoppingCart(item))
            }
        } else {
            dispatch(addToShoppingCart(item))
        }
    }
    

    const handleRemoveButton = (item) => {
        console.log('lol')
        if (!!cart.length) {
            const cartItem = cart?.find(({id}) => id === item.id)
            // console.log(cartItem)
            if (cartItem?.quantity > 1) {
                dispatch(decreaseQuantityCart(cartItem))
                console.log(cartItem)
                localStorage.setItem('cartItems', JSON.stringify(cartItem))
            } else {
                dispatch(removeFromShoppingCart(item))
            }
        } else {
            dispatch(removeFromShoppingCart(item))
        }
    }
    const getStorage = () =>{
        const items= JSON.parse(localStorage.getItem('cartItems'))
    }
    const handleFullRemove = (item) => {
        dispatch(removeFromShoppingCart(item))
    }

    return (
        <div>
            <div className={styles.container}>
                <Link to ='/'><span className={styles.arrow_back}></span></Link>
                <h1 className={styles.shopping_cart_title}>Корзина</h1>
                {cart.length === 0 &&
                    <div className={styles.empty_list}>
                        <p>Здесь пока ничего нет</p>
                        <span className={styles.empty_list_description}>Вы можете ознакомиться с нашими товарами на вкладке <b>Ассортимент</b>.</span>
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
                                <div className={styles.cart_weight}>Вес 22кг</div>
                                <div className={styles.cart_price}>{item.price} сом</div>

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
                                <span className={styles.Itogo}>Итого : </span>
                                <span className={styles.total_price_span}>{totalPrice} сом</span>
                            </span>
                        </div>
                        <div className={styles.checkout_div}>
                            <button className={styles.checkout}>
                                Оформить заказ
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Basket;