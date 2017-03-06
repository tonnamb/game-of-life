import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { propagateGame } from '../actions';

class PropagateButton extends Component {
	render() {
		return (
			<button type="button" onClick={this.props.propagateGame}>
				Propagate
			</button>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ propagateGame }, dispatch);
}

export default connect(null, mapDispatchToProps)(PropagateButton);