import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddButton from '../../components/buttons/add-button';
import WishlistButton from '../../components/buttons/wishlist-button';
import {
    addQuantityCart,
    addToLikeCart,
    addToShoppingCart,
    removeFromShoppingCart,
    removeFromWishList
} from '../../redux/actions/actions';
import { honeyList, honeyLoading, shoppingCartList, wishCartList } from '../../redux/selectors/selectors';
import honeyOperation from '../../redux/thunk/thunk'
import styles from './styles.module.css'
import { Pagination } from 'swiper';
import { SwiperSlide, Swiper } from "swiper/react";
import honey_pic from '../../shared/icons/honey_pic.svg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const ProductList = (props) => {
    const honeyListWeb = useSelector(honeyList)
    const honeyLoadingWeb = useSelector(honeyLoading)
    const cart = useSelector(shoppingCartList)
    const list = useSelector(wishCartList)
    console.log(list, 'list')
    // console.log(cart)
    const { getHoneyList } = honeyOperation

    const dispatch = useDispatch()
    const { id } = props

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
        console.log(list, 'wish')
        list.map((el => {
            if (el.id === item.id) {
                dispatch(removeFromWishList())

            }
        }))
        dispatch(addToLikeCart(item))

    }
    const pagination = {
        clickable: true,
    };

    useEffect(() => {
        dispatch(honeyOperation.getHoneyList())
    }, [])
    if (honeyLoadingWeb) {
        return <p>loading...</p>
    }

    return (

        <div className={styles.mainWrap}>
            <h3>Ассортимент</h3>
            <div className={styles.wrap}>


                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    // centeredSlides={true}
                    pagination={pagination}

                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {honeyListWeb.map((item) => (
                        <div key={item.id}>

                            <SwiperSlide>
                                <Link to={`/honeys/${item.id}`}>

                                    <div className={styles.productWrap}>
                                        <img src={honey_pic} alt="" width={329} height={397} />
                                        <p className={styles.honeyName}>{item.name}</p>
                                        <p className={styles.honeyWeight}> Вес : {item.weight} кг</p>
                                        <p className={styles.honeyName}> {item.Price} сом </p>
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
                            </SwiperSlide>
                        </div>
                    ))}

                </Swiper>

            </div>
        </div>
    );
};

export default ProductList;