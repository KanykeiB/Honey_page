import React from 'react';
import ProductList from '../../containers/product-list';
import styles from './styles.module.css'



const HomePage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.productBackground} >
                <div className={styles.bannerBackground}>
                    <div className={styles.banner}></div>
                </div>
                <span className={styles.bee}></span>

                <ProductList />
            </div>

            <section>
                <h3 className={styles.shipping_tutorial_text} >Как мы работаем</h3>
                <div className={styles.shipping_tutorial_wrap} >
                    <div>
                        <span className={styles.shopping_cart}></span>
                        <p>Оформление заказа</p>
                    </div>
                    <span className={styles.arrow}></span>
                    <div>
                        <span className={styles.bank_cards_icon}></span>
                        <p>Оплата</p>
                    </div>
                    <span className={styles.arrow}></span>
                    <div>
                        <span className={styles.phone_icon}></span>
                        <p>Мы с вами связываемся</p>
                    </div>
                    <span className={styles.arrow}></span>
                    <div>
                        <span className={styles.car_icon}></span>
                        <p>Мы доставляем товар </p>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default HomePage;