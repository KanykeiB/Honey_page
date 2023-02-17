import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {wishCartList} from "../../redux/selectors/selectors";
import {addToLikeCart, removeFromShoppingCart} from "../../redux/actions/actions";

const Wishlist = () => {
    const list = useSelector(wishCartList)
    const dispatch = useDispatch()
    const handleRemoveWishItem = (item) => {
            dispatch(removeFromShoppingCart(item))
    }

    return (
        <div>
            {list.length === 0 && <div>Cart is empty</div>}
            {list.map((item) => (
                <div key = {item.id}>
                    <div>{item.name}</div>
                    <button onClick={() => handleRemoveWishItem(item)}>remove</button>
                </div>

            ))}

        </div>
    );
};

export default Wishlist;