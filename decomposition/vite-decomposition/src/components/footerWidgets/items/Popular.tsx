/**
 * Компонент отображает список статей в разделе "Посещаемое"
 * @param {Object} list
 */

import { IPopularProps } from "../../../models/IPopularProps"

interface IPopularList {
    list: IPopularProps[]
}

export default function Popular({ list }: IPopularList) {
    return (
        <ul className="popular-list">
            {list.map((item: IPopularProps) => 
                <li key={Math.floor(Math.random()*100)} className="popular-item">
                    <a href={item.link} className="popular-link">
                        <span className="popular-title">{item.title}</span> - {item.text}
                    </a>
                </li>
            )}
        </ul>
    )
}