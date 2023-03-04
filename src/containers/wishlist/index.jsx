import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {wishCartList} from "../../redux/selectors/selectors";
import {addToLikeCart, removeFromShoppingCart, removeFromWishList} from "../../redux/actions/actions";
import styles from "./style.module.css";
import honey_image from "../../shared/icons/Group1.png";
import {Link} from "react-router-dom";
import BouncingDotsLoader from "../../components/loader";

const Wishlist = () => {
    const list = useSelector(wishCartList)
    const dispatch = useDispatch()
    const handleRemoveWishItem = (item) => {
        dispatch(removeFromWishList(item))
    }
    // const wishList = JSON.parse(localStorage.getItem('list'))
    // console.log(wishList, 'wishlist')
    return (
        <div className={styles.container}>

            <h1 className={styles.shopping_cart_title}>Избранное</h1>
            {list.length === 0 && <div className={styles.empty_list}><p>Здесь пока что ничего нет.</p>
                <Link to = '/'><span className={styles.arrow_back}></span></Link>
                <span className={styles.empty_list_description}>Вы можете ознакомиться с нашими товарами на вкладке <b><Link to ='/honeys'>Ассортимент.</Link></b></span></div>}
            {list.map((item) => (
                <div key={item.id}>
                    <div className={styles.shopping_cart_main_div}>
                        <div>
                            <img className={styles.honey_image_shopping_cart} src={honey_image} alt="Honey"/>
                        </div>
                        <div className={styles.content_block}>
                            <button
                                className={styles.remove_icon}
                                onClick={() => {
                                    handleRemoveWishItem(item)
                                }}>
                                <span className={styles.unlike}></span>
                            </button>
                            <div className={styles.cart_name}>{item.name}</div>
                            <div className={styles.cart_weight}>{item.weight}</div>
                            <div className={styles.cart_price}>{item.price} сом</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Wishlist;