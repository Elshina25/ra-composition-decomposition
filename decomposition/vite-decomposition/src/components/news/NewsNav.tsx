/**
 * Компонент отображает верхнее меню в блоке новостей
 * 
 */

export interface INewsNav {
    title: string,
    link: string
}

interface INewsNavList {
    list: INewsNav[]
}

export default function NewsNav({ list }: INewsNavList) {
    return (
        <ul className="news-navigation">
            {list.map((item: INewsNav) =>
                <li key={Math.floor(Math.random()*100)} className="news-navigation-item">
                    <a href={item.link}>{item.title}</a>
                </li>
            )}
        </ul>
    )
}