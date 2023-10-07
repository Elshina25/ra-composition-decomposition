import NewsWidget from "./news/NewsWidget";
import RateWidget from "./rate/RateWidget";
import SearchString from "./search/SearchString";
import Banner from "./banner/Banner";
import WeatherWidget from "./weather/WeatherWidget";
import FooterWidget from "./footerWidgets/FooterWidget";
import Popular from "./footerWidgets/items/Popular";
import TvProgram from "./footerWidgets/items/TvProram";
import Broadcast from "./footerWidgets/items/Broadcast";
import GermanMap from "./footerWidgets/items/GermanMap";
import { newsCategories, news, rates, banner, weather, popular, germanyMapData, program, broadcast } from './data';

/**
 * Компонент отображает все компоненты приложения
 * 
 */

export default function MainPage() {
    return (
        <div className="main-container">
            <NewsWidget navList={newsCategories} news={news}/>
            <RateWidget list={rates}/>
            <SearchString/>
            <Banner item={banner}/>
            <WeatherWidget props={weather}/>
            <FooterWidget title={'Посещаемое'} link={'#'} content={<Popular list={popular}/>}/>
            <FooterWidget title={'Карта Германии'} link={'#'} content={<GermanMap list={germanyMapData}/>}/>
            <FooterWidget title={'Телепрограмма'} link={'#'} img={"http://placehold.it/20x10/"} content={<TvProgram list={program}/>}/>
            <FooterWidget title={'Эфир'} link={'#'} content={<Broadcast list={broadcast}/>}/>
        </div>
    )
}