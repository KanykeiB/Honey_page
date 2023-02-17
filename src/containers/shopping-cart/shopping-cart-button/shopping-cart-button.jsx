import React from 'react';
import styles from './style.module.css'
import {useSelector} from "react-redux";
import {shoppingCartList} from "../../../redux/selectors/selectors";
const ShoppingCartButton = () => {
    const cart = useSelector(shoppingCartList)
    const totalQuantity = cart.reduce((acc, c) => acc + c.quantity, 0);
    return (
        <div className={styles.shopping_cart_parent}>
            <span className={styles.total_quantity}>{totalQuantity}</span>
                <button  className={styles.button}>{}</button>
        </div>
    );
};

export default ShoppingCartButton;