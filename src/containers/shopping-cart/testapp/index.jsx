import Basket from '../busket/Busket';
import data from '../../../MOCK_DATA/index';
import {useState} from 'react';

function TestApp() {
    const {data} = data
    const [cartItems, setCartItems] = useState([]);
    const shoppingCartStorage = JSON.stringify(cartItems)

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? {...exist, qty: exist.qty + 1} : x
                )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
    }


    localStorage.setItem('shoppingCart', shoppingCartStorage)

    // console.log(cartItems, 'cart')

    const onRemove = (data) => {
        const exist = cartItems.find((x) => x.id === data.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== data.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === data.id ? {...exist, qty: exist.qty - 1} : x
                )
            );
        }
    };
    const totalQuantity = cartItems.reduce((acc, c) => acc + c.qty, 0);
    return (
        <div className="App">
            <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                totalQuantity={totalQuantity}
            ></Basket>
        </div>
    );
}

export default TestApp;