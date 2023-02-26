import React from 'react';
import styles from './styles.module.css'

const FilterHoneyButton = (props) => {
    const {
        onClick
    } = props
    return (
        <button
            className={styles.filterHoneyButton}
            onClick={onClick}>
                Мёд
        </button>
    );
};

export default FilterHoneyButton;