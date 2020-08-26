import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	// The Only time assignment this.state
	state = {
		lat: null,
		errorMassage: null
	};
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(postion) => this.setState({ lat: postion.coords.latitude }),
			(err) => this.setState({ errorMassage: err.message })
		);
	}
	// created in render should one return  Not conditions of return
	renderContent() {
		if (this.state.lat && !this.state.errorMassage) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		if (!this.state.lat && this.state.errorMassage) {
			return <h1>Error : {this.state.errorMassage}</h1>;
		}
		return <Spinner massage="Please accept location request" />;
	}
	render() {
		//
		return <div style={{ border: '5px solid  red' }}>{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
