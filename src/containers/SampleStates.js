import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBlinker, createPulsar, createGlider, createGosper } from '../actions';

class SampleStates extends Component {
    render() {
        return (
            <div className='sample-states btn-group' role='group' aria-label='controls'>
                <button type="button" onClick={this.props.createBlinker} className='btn btn-default'>
                    Blinker
                </button>
                <button type="button" onClick={this.props.createPulsar} className='btn btn-default'>
                    Pulsar
                </button>
                <button type="button" onClick={this.props.createGlider} className='btn btn-default'>
                    Glider
                </button>
                <button type="button" onClick={this.props.createGosper} className='btn btn-default'>
                    Gosper glider gun
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ createBlinker, createPulsar, createGlider, createGosper }, dispatch);
}

export default connect(null, mapDispatchToProps)(SampleStates);