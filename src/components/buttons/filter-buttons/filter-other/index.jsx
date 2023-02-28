import React from 'react';
import styles from './styles.module.css'

const FilterProductButton= (props) => {
    const {
        onClick
    } = props
    return (
        <button
            className={styles.filterProductButton}
            onClick={onClick}>
                Иные товары
        </button>
    );
};

export default FilterProductButton;