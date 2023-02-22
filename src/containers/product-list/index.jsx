import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import AddButton from '../../components/buttons/add-button';
import WishlistButton from '../../components/buttons/wishlist-button';
import {addQuantityCart, addToLikeCart, addToShoppingCart} from '../../redux/actions/actions';
import {honeyList, honeyLoading, shoppingCartList, wishCartList} from '../../redux/selectors/selectors';
import honeyOperation from '../../redux/thunk/thunk'
import styles from './styles.module.css'
import Carousel from 'react-material-ui-carousel'


const ProductList = (props) => {
    const honeyListWeb = useSelector(honeyList)
    const honeyLoadingWeb = useSelector(honeyLoading)
    const cart = useSelector(shoppingCartList)
    const list = useSelector(wishCartList)
    console.log(list, 'list')
    // console.log(cart)
    const {getHoneyList} = honeyOperation

    const dispatch = useDispatch()
    const {id} = props

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
    const handleAddWishListItem = (item) => {
        console.log(item,'loh')
        // if (!!list.length) {
        //     const listItem = list?.find(({id}) => id === item.id)
        //     if (listItem?.id === item?.id) {
        //
        //         console.log(listItem, 'listitem')
        //         localStorage.setItem('listItems', JSON.stringify(listItem))
        //     }
            dispatch(addToLikeCart(item))
        // }
    }

    useEffect(() => {
        dispatch(honeyOperation.getHoneyList())
    }, [])
    if (honeyLoadingWeb) {
        return <p>loading...</p>
    }

    return (
        
        <div>
            <div className={styles.wrap}>
                {/* <Carousel> */}
                {honeyListWeb.map((item) => (
                    <div key={item.id}>
                        {/* <img src={"../../shared/icons/honey.svg"}></img> */}
                        <Link to={`/honeys/${item.id}`}>
                            <div>
                                <p>{item.name}</p>
                                {/*<p> Цена : {item.Price} сом</p>*/}
                                <p> Вес : {item.weight} кг</p>
                            </div>
                        </Link>
                        <div className={styles.wrap}>
                            <div className={styles.buttons_parent}>
                                <WishlistButton
                                    className={styles.wishlist_button}
                                    onClick={() => handleAddWishListItem(item)}
                                >

                                </WishlistButton>
                                <AddButton
                                    onClick={() => handleAddButton(item)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {/* </Carousel> */}
            </div>
        </div>
    );
};

export default ProductList;