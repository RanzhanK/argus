import React from 'react';
import './CryptoScroll.css';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class CryptoScroll extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <div className="card">
                <Card>
                    <Card.Header>
                        <form onClick={this.props.gettingCurrMethod}>
                            <button className="accordion" onClick={() => {
                                this.setState({show: !this.state.show})
                            }}>{this.state.show ? 'Скрыть' : 'Показать'} данные
                            </button>
                        </form>
                        {
                            this.state.show ?
                                this.props.currencies &&
                                <p>{this.props.currencies.map(currencies_info =>
                                    <li> Криптовалюта: {currencies_info.code} Полное название
                                        криптовалюты {currencies_info.name}</li>)}</p>
                                : null
                        }
                    </Card.Header>
                </Card>
            </div>
        )
    }
}

export default CryptoScroll;
