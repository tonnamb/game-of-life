import React, { Component } from 'react';
import Screen from '../containers/Screen';
import Controls from '../containers/Controls';
import IterCounter from '../containers/IterCounter';
import SampleStates from '../containers/SampleStates';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="page-header">
					<h3>Conway's Game of Life - React.js Implementation</h3>
				</div>
				<Screen />
				<Controls />
				<IterCounter />
				<SampleStates />
				<h4>Fork me on <a href="https://github.com/tonnamb/game-of-life">GitHub</a></h4>
			</div>
		);
	}
}

export default App;