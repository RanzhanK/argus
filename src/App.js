import React from 'react';
import Form from "./components/Form";
import Info from "./components/Info";
import './App.css';

class App extends React.Component {
    render() {

        return (
            <div>

                <Form/>
                <Info/>
            </div>
        )
    }
}

export default App;
