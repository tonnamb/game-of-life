import React, { Component } from 'react';
import Screen from '../containers/Screen';

class App extends Component {
	render() {
		return (
			<div>
				<h3>Conway's Game of Life - React.js Implementation</h3>
				<Screen />
			</div>
		);
	}
}

export default App;