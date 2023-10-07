/**
 * Компонент отображает каждый виджет внизу страницы
 * 
 */

import { IFooterWidgetProps } from "../../models/IFooterWidgetProps";

export default function FooterWidget({ title, link, img, content }: IFooterWidgetProps) {
    return (
        <div className='footer-widget'>
            <a href={link}>
                <h3>{title}</h3>
                {img && <img src={img} alt={title}/>}
            </a>
                {content}
        </div>
    )
}