import React from "react";
import styles from './style.module.css'

const Basket = (props) => {
    const { cartItems, onAdd, onRemove} = props;
    console.log(cartItems)
    const itemsPrice = cartItems.reduce((acc, c) =>acc + c.qty * c.price, 0);
    const totalPrice = itemsPrice;

    return (
        <div>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className={styles.col_2}>{item.name}</div>
                        <div className={styles.col_2}>
                            <button onClick={() => onRemove(item)} className={styles.remove}>
                                -
                            </button>{' '}
                            <button onClick={() => onAdd(item)} className={styles.add}>
                                +
                            </button>
                        </div>

                        <div className={styles.col_2}>
                            {item.qty} x ${item.price.toFixed}
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <div className={styles.row}>
                            <div className={styles.col_2}>Items Price</div>
                            <div className="col-1 text-right">${itemsPrice}</div>
                        </div>

                        <div className="row">
                            <div className="col-2">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>${totalPrice}</strong>
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