/**
 * Компонент отображает ссылки над строкой поиска
 * @param {string} title
 * @param {string} link
 * 
 */

export interface ISearchProps {
    title: string,
    link: string
}

export default function SearchItem({ title, link }:ISearchProps) {
    return (
        <div className="searh-link">
            <a href={link}>{title}</a>
        </div>
    )
}