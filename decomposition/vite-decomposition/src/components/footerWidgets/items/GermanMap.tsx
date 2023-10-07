/**
 * Компонент отображает листинг виджета "Карта Германии"
 * @param { Object } list
 */

import { IGermanMapProps } from "../../../models/IGermanMapProps";

interface IGermanMapList {
    list: IGermanMapProps[]
}

export default function GermanMap({ list }: IGermanMapList) {
    return (
        <ul className="german-map-list">
            {list.map((item: IGermanMapProps) => 
                <li className="german-map-item">
                    <a href={item.link} className="german-map-link">{item.title}</a>
                </li>
            )}
        </ul>
    )
        
}