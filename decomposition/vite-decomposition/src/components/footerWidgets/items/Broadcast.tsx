/**
 * Компонент отображает листинг эфира
 * @param { Object } list
 */

import { IBroadcastProps } from "../../../models/IBroadcastProps";

interface IBroadCastList {
    list: IBroadcastProps[]
}

export default function Broadcast({ list }: IBroadCastList) {
    return (
        <ul className="broadcast-list">
            {list.map((item: IBroadcastProps) => 
                <li key={Math.floor(Math.random()*100)} className="broadcast-item">
                    <img src={item.img} alt={item.title} />
                    <a href={item.link}>
                        {item.title}
                        <span className="broadcast-tag">{item.tag}</span>
                    </a>
                    
                </li>
            )}
        </ul>
    )
}