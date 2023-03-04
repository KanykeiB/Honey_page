import React from 'react';
import styles from './styles-blogs.module.css'
import blog_1 from '../../shared/icons/blog_pic_1.svg'

const BlogOne = () => {
    return (
        <div className={styles.promo_blog}>
            <h3 className={styles.label}>
                Мёд, лимон, чеснок - эликсир здоровья
            </h3>
            <div className={styles.blog_img}>
                <img src={blog_1} alt="" />
            </div>
            <p className={styles.text}>
                Вы не поверите: «волшебный» эликсир, дарующий молодость, здоровье и долголетие, существует! И готовят его не в супер секретной лаборатории из нескольких сотен ингредиентов со сложно произносимыми названиями, а на обычной кухне из трех компонентов, которые найдутся практически у любой хозяйки: из мёда, лимона и чеснока. Удивлены? Как тут не вспомнить мудрое изречение о том, что все гениальное просто?
            </p>
            <p className={styles.text}>
                О пользе перечисленных продуктов известно давно. Каждый из них являет собой кладезь ценных для организма веществ: витаминов, микро- и макроэлементов, фитонцидов, эфирных масел и органических кислот. Однако мало кто знает, что в составе настойки, изобретение которой приписывают китайским монахам, благотворное действие меда, лимона и чеснока усиливается многократно, превращая ее в настоящее чудо-снадобье.
            </p>
            <span className={styles.text_span}>
                Рецепт:
            </span>
            <p className={styles.text}>
                Лимоны помыть, удалить косточки, измельчить в мясорубке или блендере. Чеснок очистить от шелухи, ополоснуть в проточной воде, измельчить. Смешать все ингредиенты в стеклянной или эмалированной емкости, прикрыть несколькими слоями марли и оставить в темном месте при комнатной температуре на 7 дней. Спустя неделю полученный настой процедить - эликсир здоровья готов к применению. Хранить снадобье необходимо в холодильнике при температуре не выше 5 градусов Цельсия.
            </p>
            <span className={styles.blog_date}>
                28.01.2023
            </span>
        </div>
    );
};

export default BlogOne;