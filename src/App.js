import React from 'react';
import Info from "./components/Info";
import Config from "./components/Config";
import CryptoScroll from "./components/CryptoScroll";
import './App.css';

class App extends React.Component {
    state = {
        crypto_val: undefined,
        usd_price: undefined,
        change: undefined,
        markets: undefined,
        currencies: undefined,
        eror: undefined
    }
    gettingData = async (event) => {
        const api_url = await fetch(`https://api.cryptonator.com/api/full/${event.value}-usd`);
        const data = await api_url.json();

        let mark = data.ticker.markets

        this.setState({
            crypto_val: data.ticker.base,
            usd_price: data.ticker.price,
            change: data.ticker.change,
            markets: mark,
            eror: ""
        });
    }
    gettingCurrData = async (event) => {
        event.preventDefault();
        const api_currencies = await fetch(`https://www.cryptonator.com/api/currencies`);
        const data_currencies = await api_currencies.json();

        let curr = data_currencies.rows

        this.setState({
            currencies: curr,
        });
    }
    render() {
        return (
            <div>
                <CryptoScroll
                    gettingCurrMethod={this.gettingCurrData}
                    currencies={this.state.currencies}
                />
                <Config
                    gettingMethod={this.gettingData}
                    currencies={this.state.currencies}
                />
                <Info
                    crypto_val={this.state.crypto_val}
                    usd_price={this.state.usd_price}
                    change={this.state.change}
                    markets={this.state.markets}
                    eror={this.state.eror}
                />
            </div>
        )
    }
}

export default App;

