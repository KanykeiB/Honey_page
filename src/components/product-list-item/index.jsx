import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addQuantityCart, addToLikeCart, addToShoppingCart, removeFromWishList } from '../../redux/actions/actions';
import { honeyItem, honeyList, honeyLoading, shoppingCartList, wishCartList } from '../../redux/selectors/selectors';
import honeyItemOperations from '../../redux/thunk/thunk'
import honey_pic from '../../shared/icons/honey_pic.svg'
import AddButton from '../buttons/add-button';
import WishlistButton from '../buttons/wishlist-button';
import styles from './styles.module.css'
const SingleProductItem = () => {
    const { id } = useParams();
    const getHoneyItemData = useSelector(honeyItem);
    const honeyLoadingWeb = useSelector(honeyLoading);
    const cart = useSelector(shoppingCartList)
    const list = useSelector(wishCartList)
    const [liked, setLiked] = useState(false)
    const dispatch = useDispatch();
    const { getHoneyItem } = honeyItemOperations;

    const handleAddButton = (item) => {
        console.log('lol')
        if (!!cart.length) {
            const cartItem = cart?.find(({ id }) => id === item.id)
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
    const handleAddWishListItem = (item) => {

        if (!!list.length) {
            const listItem = list?.find(({ id }) => id === item.id)
            if (listItem?.id === item?.id) {
                dispatch(removeFromWishList(item))
                console.log('koko')
            } else {
                dispatch(addToLikeCart(item))
            }
        } else {
            dispatch(addToLikeCart(item))
        }
        setLiked(!liked)
    }
    useEffect(() => {
        dispatch(honeyItemOperations.getHoneyItem(id))
        // return()=>{
        //     dispatch(honeyItemOperations.)
        // }
        //need to make to clear the data
    }, [])
    if (honeyLoadingWeb) {
        return <p>loading</p>
    }
    return (
        <div className={styles.productItemWrap}>
            <span className={styles.randomBee}></span>
            <p>{getHoneyItemData.name}</p>
            <div className={styles.promoBlock} >
                <div className={styles.honeyBg}>
                    <img src={honey_pic} alt="" className={styles.honeyPic} />

                </div>
                <p className={styles.honeyText}>{getHoneyItemData.description}</p>
            </div>
            <div className={styles.priceAndButtonWrap}>
                <div className={styles.priceAndWeight}>
                    <p className={styles.honeyWeight}> Вес: {getHoneyItemData.weight} кг</p>
                    <p className={styles.honeyName}>{getHoneyItemData.Price} сом</p>
                </div>
                <div className={styles.buttonsWrap}>
                    <WishlistButton
                        onClick={() => handleAddWishListItem(getHoneyItemData)}
                    />
                    <AddButton
                        onClick={() => handleAddButton(getHoneyItemData)}
                    />
                </div>

            </div>
            <span className={styles.randomBee2}></span>
        </div>
    );
};

export default SingleProductItem;