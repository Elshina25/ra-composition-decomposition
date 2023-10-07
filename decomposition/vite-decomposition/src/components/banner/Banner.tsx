/**
 * Компонент отображает рекламные баннеры
 * @param {string} img
 * @param {string} link
 */

export interface IBanner {
    img: string,
    link: string
}

export default function Banner({ item } : {item: IBanner}) {
    const { img, link } = item;
    return (
        <div className="banner">
            <a href={link}>
                <img src={img} alt="banner" />
            </a>
        </div>
    )
}