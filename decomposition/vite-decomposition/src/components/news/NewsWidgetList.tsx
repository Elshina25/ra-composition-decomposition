/**
 * Компонент отображает список новостей
 * @param { ...INewsItemProps } news
 *
 */

import { INewsItemProps } from "../../models/INewsItemProps";

interface INewsList {
  news: INewsItemProps[];
}

export default function NewsWidgetList({ news }: INewsList) {
  return (
    <>
      <div className="news-list">
        {news.map((item: INewsItemProps) => (
          <li key={Math.floor(Math.random() * 100)} className="news-item">
            <img src={item.img} className="news-icon" alt={item.title} />
            <a href={item.link}>
              <h4 className="news-title">{item.title}</h4>
            </a>
          </li>
        ))}
      </div>
    </>
  );
}
