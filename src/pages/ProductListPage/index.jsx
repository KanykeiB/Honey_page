import React from 'react';
import ProductList from '../../containers/product-list';
import styles from './styles.module.css'

const ProductListPage = () => {
    return (
        <div className={styles.productListPageWrap}>
            <span className={styles.randomBee}></span>
            
            <ProductList/>
            <span className={styles.randomBee2}></span>
        </div>
    );
};

export default ProductListPage;