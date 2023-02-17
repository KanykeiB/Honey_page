import React from "react";
import styles from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {shoppingCartList} from "../../../redux/selectors/selectors";
import {addQuantityCart, removeFromShoppingCart, addToShoppingCart, decreaseQuantityCart} from "../../../redux/actions/actions";
const Basket = ({cartItems, onAdd, onRemove}) => {

    // \console.log()
    // const itemsPrice = cartItems.reduce((acc, c) =>acc + c.qty * c.price, 0);
    // const totalPrice = itemsPrice;
    const cart = useSelector(shoppingCartList)
    const dispatch = useDispatch()
    console.log(cart)

    const handleAddButton = (item) => {
        console.log('lol')
        if (!!cart.length){
            const cartItem = cart?.find(({id}) => id === item.id)
            if (cartItem?.id === item?.id){
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
        if (!!cart.length){
            const cartItem = cart?.find(({id}) => id === item.id)
            // console.log(cartItem)
            if (cartItem?.quantity > 1){
                dispatch(decreaseQuantityCart(cartItem))
                console.log(cartItem)
                // localStorage.setItem('cartItems', JSON.stringify(newCartItems))
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
            <div>
                {cart.length === 0 && <div>Cart is empty</div>}
                {cart.map((item) => (
                    <div className="row">
                        <button onClick={() => {handleFullRemove(item)}}>remove</button>
                        <div className={styles.cart_price}>{item.name}</div>
                        <div>{item.price}</div>
                        <div className={styles.cart_quantity}>{item.quantity}</div>
                        <div className={styles.cart_buttons}>
                            <button onClick={() => handleRemoveButton(item)} className={styles.remove_button}>
                                -
                            </button>{' '}
                            <button onClick={() => handleAddButton(item)} className={styles.add_button}>
                                +
                            </button>
                        </div>
                    </div>
                ))}


                {cartItems.length !== 0 && (
                    <>
                        <div className={styles.row}>
                            <div className={styles.col_2}>Items Price</div>
                            <div className="col-1 text-right"></div>
                        </div>

                        <div className="row">
                            <div className="col-2">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong></strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <button>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Basket;