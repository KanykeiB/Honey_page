import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {wishCartList} from "../../redux/selectors/selectors";
import {addToLikeCart, removeFromShoppingCart} from "../../redux/actions/actions";

const Wishlist = () => {
    const list = useSelector(wishCartList)
    const dispatch = useDispatch()

    const handleAddWishListItem = (item) => {
        if(!!list.length) {
            const listItem = list?.find(({id}) => id === item.id)
            if (listItem?.id === item?.id){
                dispatch(addToLikeCart(listItem))
                localStorage.setItem('listItems', JSON.stringify(listItem))
            } else {
                dispatch(addToLikeCart(item))
            }
        } else {
            dispatch(addToLikeCart(item))
        }
    }

    const handleRemoveWishItem = (item) => {
        if (!!list.length) {
            const listItem = list?.find(({id}) => id === item.id)
            dispatch(removeFromShoppingCart(item))
        }
    }

    return (
        <div>
            {list.length === 0 && <div>Cart is empty</div>}
            {list.map((item) => (
                <div>

                </div>
            ))}
            <button onClick={() => {handleRemoveWishItem()}}>remove</button>
        </div>
    );
};

export default Wishlist;