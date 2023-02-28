import React from 'react';
import s from './style.module.css'
import phone1 from '../../shared/icons/phone.svg'
import watch from '../../shared/icons/watch.svg'
import location from '../../shared/icons/location.svg'
import telega from '../../shared/icons/Telegram.svg'
import whots from '../../shared/icons/whats.svg'

const ContactUs = () => {
    return (
        <div className={s.container}>
            <div className={s.parent}>
                <div className={s.contact}>
                    <p>Контакты</p>
                </div>

                <div className={s.phone}>
                    <div className={s.imgphone}>
                        <img className={s.phone_img} src={phone1} alt=""/>
                    </div>
                    <div className={s.number}>
                        <ul className={s.phone_links}>
                            <li className={s.tg}><img src={telega} alt=""/> <a href="whats">+996779454233</a></li>
                            <li><img src={whots} alt=""/> <a href="#">+996779454233</a></li>
                        </ul>
                    </div>
                    <div className={s.mapouter}>
                        <div className={s.gmap_canvas}>
                            <iframe className={s.map1} width="417" height="426" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=41.913932, 73.323223&t=&z=10&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="no" marginWidth="no"></iframe>
                        </div>
                    </div>
                </div>

                <div className={s.container}>
                    <div className={s.block_2}>
                        <div className={s.watch}>
                            <img src={watch} alt=""/>
                        </div>
                        <div className={s.text}>
                            Пн-Пт 9:00-21:00
                        </div>
                    </div>
                    <div className={s.carta}>
                        <iframe className={s.map2} width="417" height="526" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=41.714671, 72.832814&t=&z=10&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="no" marginWidth="0"></iframe>
                    </div>
                </div>
                <div className={s.locations1}>
                    <div className={s.location}>
                        <img src={location} alt=""/>
                    </div>
                    <div className={s.text2}>
                        Чон-дөбө (Токтогульский район)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;