import React, {Component} from 'react';
import './App.css';
import Map from './Map';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
        };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">;{this.state.apiResponse}</p>
                <Map />
            </div>
        );
    }
}

export default App;
