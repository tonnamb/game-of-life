import React, { Component } from 'react';
import Screen from '../containers/Screen';
import StartButton from '../containers/StartButton';
import StopButton from '../containers/StopButton';
import PropagateButton from '../containers/PropagateButton';

class App extends Component {
	render() {
		return (
			<div>
				<div className="page-header">
					<h3>Conway's Game of Life - React.js Implementation</h3>
				</div>
				<Screen />
				<div>
					<StartButton />
					<StopButton />
					<PropagateButton />
				</div>
			</div>
		);
	}
}

export default App;