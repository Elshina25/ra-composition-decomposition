/**
 * Компонент отображает листинг телепрограммы
 * @param { Object} list
 */

import { ITvProgramProps } from "../../../models/ITvProgramProps"

interface ITvProgramList {
    list: ITvProgramProps[]
}

export default function TvProgram({ list }: ITvProgramList) {
    return (
        <>
        <ul className="tv-program-list">
            {list.map((item: ITvProgramProps) => 
                <li key={Math.floor(Math.random()*100)} className="tv-program-item">
                    <a href={item.link} className="tv-program-string">
                        {item.time}
                        {item.title}
                        <span className="tv-program-string tag">{item.tag}</span>
                    </a>
                </li>
            )}
        </ul>
        </>
    )
}