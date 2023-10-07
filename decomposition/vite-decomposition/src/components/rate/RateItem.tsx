/**
 * Компонент отображает один элемент курса валют
 * @param {string} title
 * @param {string} value
 * @param {string} changeRatio
 */

export interface IRateProps {
    title: string,
    value: string,
    changeRatio: string
}

export default function RateItem({ title, value, changeRatio } : IRateProps) {
    return (
        <div className="rate-item">
            <span className="rate-title">{title}</span>
            <span className="rate-value">{value}</span>
            <span className="rate-change">{changeRatio}</span>
        </div>
    )
}