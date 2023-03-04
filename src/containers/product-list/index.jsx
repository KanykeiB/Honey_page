import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddButton from '../../components/buttons/add-button';
import WishlistButton from '../../components/buttons/wishlist-button';
import {
    addQuantityCart,
    addToLikeCart,
    addToShoppingCart,
    filterHoneyActionCreator,
    removeFromWishList
} from '../../redux/actions/actions';
import { honeyList, honeyLoading, getHoneyFilter, shoppingCartList, wishCartList } from '../../redux/selectors/selectors';
import honeyOperation from '../../redux/thunk/thunk'
import styles from './styles.module.css'
import { Pagination } from 'swiper';
import { SwiperSlide, Swiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {TYPE_OF_FILTER} from '../../redux/reducers/filter-reducer';
import BouncingDotsLoader from '../../components/loader';


const ProductList = (props) => {
    const honeyListWeb = useSelector(honeyList)
    const honeyLoadingWeb = useSelector(honeyLoading)
    const honeyFilter = useSelector(getHoneyFilter)
    const cart = useSelector(shoppingCartList)
    const list = useSelector(wishCartList)
    const [selected, setSelected] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const { getHoneyList } = honeyOperation
    const dispatch = useDispatch()
    const { id } = props

    const filterHoney = (honeylistFiltered, filter) => {
        switch (filter) {
            case TYPE_OF_FILTER.SHOW_ALL:
                return honeylistFiltered
            case TYPE_OF_FILTER.SHOW_HONEY:
            
                return honeylistFiltered.filter(honey => honey.category == 2)
            case TYPE_OF_FILTER.SHOW_OTHER:
             
                return honeylistFiltered.filter(honey => honey.category == 3)
            default:
                return honeylistFiltered
        }
    }
    const handleAddButton = (item) => {
        if (!!cart.length) {
            const cartItem = cart?.find(({ id }) => id === item.id)
            if (cartItem?.id === item?.id) {
                dispatch(addQuantityCart(cartItem))
                // localStorage.setItem('cart', JSON.stringify(cart))
            } else {
                dispatch(addToShoppingCart(item))
            }
        } else {
            dispatch(addToShoppingCart(item))
        }
    }
    const handleFilterHoneyButton = () =>{
        dispatch(filterHoneyActionCreator(TYPE_OF_FILTER.SHOW_HONEY))

        setSelected(!selected)
    }
    const handleFilterOtherButton = () =>{
        dispatch(filterHoneyActionCreator(TYPE_OF_FILTER.SHOW_OTHER))
        setSelected(!selected)
    }
    const handleAddWishListItem = (item) => {
        if (!!list.length) {
            const listItem = list?.find(({ id }) => id === item.id)
            if (listItem?.id === item?.id) {
                dispatch(removeFromWishList(item))
            } else {
                dispatch(addToLikeCart(item))
            }
        } else {
            dispatch(addToLikeCart(item))
        }
    }
    const pagination = {
        clickable: true,
    };
    console.log(selected)
    useEffect(() => {
        dispatch(honeyOperation.getHoneyList())
    }, [])

    if (honeyLoadingWeb) {
        return <BouncingDotsLoader/>
    }

    return (
        <div className={styles.mainWrap}>
            <h3>Ассортимент</h3>
            <div className={styles.filterButtonsWrap}>
                <button
                    className={selected? styles.filterHoneyButton : styles.filterHoneySelected}
                    onClick={() => handleFilterHoneyButton()}
                    disabled={selected? false : true}
                    >
                    Мёд
                </button>
                <button
                    className={selected? styles.filterProductSelected : styles.filterProductButton}
                    onClick={() => handleFilterOtherButton()}
                    disabled={selected? true : false}
                    >
                        
                    Иные товары
                </button>
            </div>

            <div className={styles.wrap}>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        377: {
                            slidesPerView: 2
                        }
                    }}
                    spaceBetween={30}
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {filterHoney(honeyListWeb, honeyFilter).map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link to={`/honeys/${item.id}`}>

                                <div className={styles.productWrap}>
                                    <img src={item.main_image} alt="pic not found" className={styles.honeyPic} />
                                    <p className={styles.honeyName}>{item.name}</p>
                                    <p className={styles.honeyWeight}> Вес : {item.weight} кг</p>
                                    <p className={styles.honeyName}> {item.price} сом </p>
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
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductList;