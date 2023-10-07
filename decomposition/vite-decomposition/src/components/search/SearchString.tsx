/**
 * Компонент отображает поисковую строку
 * 
 */

import SearchItem from "./SearchItem";

export default function SearchString() {
    return (
        <div className="search-string">
            <img src="#" alt="search system logo" />
            <div className="search-string-elements">
                <SearchItem title='Видео' link='#'/>
                <SearchItem title='Картинки' link='#'/>
                <SearchItem title='Новости' link='#'/>
                <SearchItem title='Карты' link='#'/>
                <SearchItem title='Маркет' link='#'/>
                <SearchItem title='Переводчик' link='#'/>
                <SearchItem title='Эфир' link='#'/>
                <SearchItem title='еще' link='#'/>
            </div>
            <input type="text" className="search-input"/>
            <button className="search-button">Найти</button>
            <span className="search-hint">Найдется все. Например, фазы луны сегодня</span>
        </div>
    )
}