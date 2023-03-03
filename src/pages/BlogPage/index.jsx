import React from 'react';
import styles from './styles.module.css'
import blog_1 from '../../shared/icons/blog_pic_1.svg'
import blog_2 from '../../shared/icons/blog_pic_2.png'
import blog_3 from '../../shared/icons/blog_pic_3.png'

const BlogPage = () => {
    return (
        <div className={styles.blog}>
            <h3>Блог</h3>
            <div className={styles.promo_block}>
                <div className={styles.promo_pic}>
                    <img src={blog_1} alt="" />
                </div>
                <div className={styles.promo_text}>
                    <h4 className={styles.promo_text_title}>Мёд, лимон, чеснок - эликсир здоровья</h4>
                    <p className={styles.promo_text_date}>28.01.2023</p>
                    <p className={styles.promo_text_descr}>В целом, конечно, разбавленное изрядной долей эмпатии, рациональное мышление обеспечивает актуальность форм воздействия. Для современного мира консультация с широким активом способствует повышению качества как самодостаточных, так и внешне зависимых концептуальных решений...</p>

                </div>
            </div>
            <div className={styles.promo_block}>
                <div className={styles.promo_pic}>
                    <img src={blog_2} alt="" />
                </div>
                <div className={styles.promo_text}>
                    <h4 className={styles.promo_text_title}>Мёд «Гречишный»</h4>
                    <p className={styles.promo_text_date}>28.01.2023</p>
                    <p className={styles.promo_text_descr}>Гречишный мед – это настоящая кладовая полезных микроэлементов и витаминов, поэтому он особенно полезен для ослабленных малышей, склонных к частым простудам. Кроме того, гречишный мед очень полезен для кроветворной системы – он положительно влияет на состав крови и укрепляет стенки сосудов, именно поэтому он обязательно...</p>

                </div>
            </div>
            <div className={styles.promo_block}>
                <div className={styles.promo_pic}>
                    <img src={blog_3} alt="" />
                </div>
                <div className={styles.promo_text}>
                    <h4 className={styles.promo_text_title}>Топ-5 полезных свойств меда для здоровья Мед – уникальный продукт, с какой стороны...</h4>
                    <p className={styles.promo_text_date}>28.01.2023</p>
                    <p className={styles.promo_text_descr}>В целом, конечно, разбавленное изрядной долей эмпатии, рациональное мышление обеспечивает актуальность форм воздействия. Для современного мира консультация с широким активом способствует повышению качества как самодостаточных, так и внешне зависимых концептуальных решений...</p>

                </div>
            </div>


        </div>
    );
};

export default BlogPage;