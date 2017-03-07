import React, { Component } from 'react';
import { connect } from 'react-redux';

class IterCounter extends Component {
    render() {
        return (
            <div className="iter-counter">
                Generation: {this.props.counter}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter
	};
}

export default connect(mapStateToProps)(IterCounter);