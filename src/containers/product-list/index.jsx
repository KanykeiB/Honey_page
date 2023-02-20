import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddButton from '../../components/buttons/add-button';
import WishlistButton from '../../components/buttons/wishlist-button';
import { addToShoppingCart } from '../../redux/actions/actions';
import { honeyList, honeyLoading } from '../../redux/selectors/selectors';
import honeyOperation from '../../redux/thunk/thunk'
import styles from './styles.module.css'

const ProductList = (props) => {
    const honeyListWeb = useSelector(honeyList)
    const honeyLoadingWeb = useSelector(honeyLoading)

    const { getHoneyList } = honeyOperation
   
    const dispatch = useDispatch()
    const { id } = props
    const handleAddButton = (id) => {
        if (id === id) {
            dispatch(addToShoppingCart(id))
        }

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
                {honeyListWeb.map((item) => (
                    <div key={item.id}>
                        <Link to={`/honeys/${item.id}`}>
                            <div >
                                <p>{item.name}</p>
                                <p> Цена : {item.Price} сом</p>
                                <p> Вес : {item.weight} кг</p>
                            </div>
                        </Link>
                        <div className={styles.wrap}>
                            <WishlistButton />
                            <AddButton
                                onClick={() => handleAddButton(item.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;