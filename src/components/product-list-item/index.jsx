import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { honeyItem, honeyLoading } from '../../redux/selectors/selectors';
import honeyItemOperations from '../../redux/thunk/thunk'
import styles from './styles.module.css'
const SingleProductItem = () => {
    const { id } = useParams();
    const getHoneyItemData = useSelector(honeyItem);
    const honeyLoadingWeb = useSelector(honeyLoading);
    const dispatch = useDispatch();
    const { getHoneyItem } = honeyItemOperations;
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
        <div>
            <div>
                <p>{getHoneyItemData.name}</p>
                <p>{getHoneyItemData.description}</p>
            </div>
        </div>
    );
};

export default SingleProductItem;