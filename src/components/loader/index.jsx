import React from "react";
import styles from './style.module.css'
const BouncingDotsLoader = () => {
    return (
        <>
            <div className={styles.bouncingLoader}>
                <div className={styles.sota1}></div>
                <div className={styles.sota2}></div>
                <div className={styles.sota3}></div>
            </div>
        </>
    );
};

export default BouncingDotsLoader;
