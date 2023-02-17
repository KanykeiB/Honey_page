import React, {useState} from 'react';
import Basket from "../../containers/shopping-cart/busket/busket";
import {useSelector} from "react-redux";
import {shoppingCartList} from "../../redux/selectors/selectors";

const ShoppingCartPage = () => {
        const [cartItems, setCartItems] = useState([]);
        const cartList = useSelector(shoppingCartList)
        // console.log(cartItems, 'cart')

        const totalQuantity = cartItems.reduce((acc, c) => acc + c.qty, 0);

        return (
            <div>
                <Basket
                    cartItems={cartItems}
                    totalQuantity={totalQuantity}
                />
            </div>
        );
    }
;

export default ShoppingCartPage;
