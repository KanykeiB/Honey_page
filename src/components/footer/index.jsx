import React from 'react';
import styles from './style.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className={styles.container}>
            <div className="row g-0 ">
                <Link className={styles.links_item} to='/'><div className={styles.logo}> </div></Link>
                <a className={styles.tmeLogo} href="https://t.me/+996779454233">+996779454233</a>
                <a className={styles.whatsappLogo} href="https://wa.me/+79146089174">+79146089174</a>
            </div>
            <div className="row g-0">
                <div className="col-6 d-none d-sm-block">
                    <Link to='/' className={styles.logoText}>RawHoney.kg</Link>
                </div>
                <div className="col-6 d-none d-sm-block">
                    <a href="mailto: zhumataev.nursultan22@gmail.com">zhumataev.nursultan22@gmail.com</a>
                </div>
                <div className="col-5 col-sm-4">
                    <Link to='/honey'>Мед</Link>
                </div>
                <div className="col-5 col-sm-4">
                    <Link to='/other-products'>Иные товары</Link>
                </div>
                <div className={styles.theLine}></div>
        
                <div className="col-5 col-sm-4">
                    <Link to='/honeys'>Ассортимент</Link>
                </div>
                <div className="col-5 col-sm-4">
                    <Link to='/delivery'>Доставка</Link>
                </div>
                <div className="col-5 col-sm-4">
                    <Link to='/about-us'>О нас</Link>
                </div>
            
                <div className="col-5 col-sm-4">
                    <Link to='/blog'>Блог</Link>
                </div>
                <div className="col-5 col-sm-4">
                    <Link to='/delivery'>Оплата</Link>
                </div>
                <div className="col-5 col-sm-4">
                    <Link to='/contact-us'>Контакты</Link>
                </div>
            </div>
            <div className="row d-none d-sm-block">
                    <div className={styles.gmap_canvas}>
                        <iframe width="220" height="220" src="https://maps.google.com/maps?q=41.913932, 73.323223&t=&z=10&ie=UTF8&iwloc=&output=embed" ></iframe>
                    </div>
                </div>
        </div>
    </footer>
);

export default Footer;
