import NewsWidgetList from "./NewsWidgetList";
import { INewsItemProps } from "../../models/INewsItemProps";
import NewsNav, { INewsNav } from "./NewsNav";

interface IWidgetNews {
    navList: INewsNav[],
    news: INewsItemProps[]
}

export default function NewsWidget({ navList, news }: IWidgetNews) {
    return (
        <div className="widget-news">
            <NewsNav list={navList}/>
            <span className="date-now">{new Date().toLocaleString()}</span>
            <ul className="widget-news-list">
                {<NewsWidgetList news={news}/>}
            </ul>
        </div>
    )

}