import React from 'react';

const Info = (props) => (
    <div>
        {props.crypto_val &&
        <div>
            <p>Криптовалюта: {props.crypto_val} Цена в долларах: {props.usd_price} Изменения: {props.change}</p>
            <p>{props.markets.map(brg_info => <li> Биржа: {brg_info.market} Цена на Бирже: {brg_info.price} Общий
                объем торгов за последние 24 часа: {brg_info.volume}</li>)}</p>
        </div>
        }
    </div>
)
export default Info;
