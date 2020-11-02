import React from 'react';
import Config from "./components/Config";
import Info from "./components/Info";
import CryptoScroll from "./components/CryptoScroll";
import './App.css';

class App extends React.Component {
    state = {
        currencies: undefined,
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
                <Config/>
                <Info/>
            </div>
        )
    }
}

export default App;
