import React from 'react';
import Select from 'react-select'

class Config extends React.Component {
    const
    options = [
        {value: 'btc', label: 'BTC'},
        {value: 'eth', label: 'ETH'},
        {value: 'ltc', label: 'LTC'},
        {value: 'rvn', label: 'RVN'},
    ]

    render() {
        return (
            <Select options={this.options} onChange={this.props.gettingMethod}/>
        )
    }
}

export default Config;
