/**
 * Компонент отображает курс валют, нефти и т.д.
 * @param { ...IRateProps} list
 */

import { IRateProps } from "./RateItem";
import RateItem from "./RateItem";

export default function RateWidget({ list }: { list: IRateProps[] }) {
    return (
        <div className="rate-widget">
            {list.map((item: IRateProps) => 
            <RateItem key={Math.floor(Math.random()*100)}
            title={item.title}
            value={item.value}
            changeRatio={item.changeRatio}
            />)}
        </div>
    )
}