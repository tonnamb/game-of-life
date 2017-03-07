import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { propagateGame, clearBoard, randomizeBoard } from '../actions';

class Controls extends Component {

    constructor(props) {
        super(props);
        this.timerStarted = false;
    }

    componentWillMount() {
        this.props.randomizeBoard();
        this.startPropagation();
    }

    startPropagation() {
        if (!this.timerStarted) {
            this.timerID = setInterval(
                this.props.propagateGame,
                500
            );
            this.timerStarted = true;
        }
    }

    stopPropagation() {
        if (this.timerStarted) {
            clearInterval(this.timerID);
            this.timerStarted = false;
        }
    }

    render() {
        return (
            <div className='controls btn-group' role='group' aria-label='controls'>
                <button type="button" onClick={this.startPropagation.bind(this)} className='btn btn-success'>
                    Start
                </button>
                <button type="button" onClick={this.stopPropagation.bind(this)} className='btn btn-danger'>
                    Stop
                </button>
                <button type="button" onClick={this.props.propagateGame} className='btn btn-primary'>
				    One Step
			    </button>
                <button type="button" onClick={this.props.clearBoard} className='btn btn-warning'>
                    Clear
                </button>
                <button type="button" onClick={this.props.randomizeBoard} className='btn btn-info'>
                    Randomize
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ propagateGame, clearBoard, randomizeBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(Controls);