import React from 'react';
import s from './style.module.css'
import img1 from '../../shared/icons/beeHunter.png'
import image2 from '../../shared/icons/beeHunter2.svg'


const AboutUsPage = () => {
    return (
        <div>
            <div className={s.container}>
                <div className={s.about}>
                    <div className={s.text}>
                        <p className={s.parent}>О нас</p>
                        <div className={s.box}>
                            <div className={s.img1}>
                                <img className={s.honeyImg1} src={img1} alt=""/>
                                <div className={s.content_block}>
                                    <p>Начали держать пасеку с мая 1996 года, хозяйство было начато с 16 семьями
                                        (ящиков) пчёл
                                        среднерусской породы.
                                    </p>

                                    <p>
                                        В 2000 году перешли на карпатскую породу пчёл, количество семей (ящиков) около
                                        15.
                                    </p>

                                    <p>
                                        В 2014 году перешли на породу пчёл карника, и увеличили до 40 семей (ящиков).
                                    </p>
                                    <p>
                                        В 2020 году до 235 семей (ящиков)
                                    </p>
                                    <p>
                                        В 2022 году часть семей перевели на породу пчёл бакфаст 60 семей, а 50 семей
                                        оставили
                                        карнику.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.meet}>
                        <p>До 2022 вся пасека стояла в начале весны в городе Каракуль, в конце весны перевозили в жайлоо
                            Чон-дөбө , которая находится между сёлами Бел-Алды и Толук Токтогульского района. С 2022
                            пасека разделена на 2 части , половина стоит на вышеперечисленных местах, а часть начали
                            ставить в жайлоо Гүдү рядом с селом Сары-булак.
                            Пасекой с самого начала занимается Жуматаев Эрик Аскарбекович, мой отец.
                        </p>
                        <div className={s.img2}>
                            <img className={s.honeyImg2} src={image2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;