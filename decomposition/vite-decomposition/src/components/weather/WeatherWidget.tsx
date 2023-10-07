/**
 * Компонент отображает виджет погоды
 * @param {string} img
 * @param {string} value
 * @param {string} content
 */

interface IWeather {
    img: string,
    value: string,
    content: string
}

export default function WeatherWidget({ props } : { props: IWeather }) {
    const { img, value, content } = props;
    return (
        <div className="weather-widget">
            <img src={img} alt="weather" />
            <span className="weather-value">{value}</span>
            <span className="weather-content">{content}</span>
        </div>
    )
}