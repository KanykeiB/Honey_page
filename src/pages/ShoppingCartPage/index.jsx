import React from 'react';
import Basket from "../../containers/shopping-cart/busket/busket";

const ShoppingCartPage = () => {
    return (
        <div>
            <Basket cartItems={data} />
        </div>
    );
};

export default ShoppingCartPage;

const data = [
    {
        id: '1',
        name: 'Honey',
        price: '3200',
        image: '2222'
    },
    {
        id: '2',
        name: 'Honey',
        price: '3234',
        image: '2222'
    },
    {
        id: '3',
        name: 'Honey',
        price: '3233',
        image: '2222'
    },
]
