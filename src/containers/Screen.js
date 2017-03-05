import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layer, Stage, Rect } from 'react-konva';
import { bindActionCreators } from 'redux';
import { toggleCell } from '../actions';

class Screen extends Component {

	constructor(props) {
		super(props);

		this.state = { mouseIsDown: false };
	}

	handleClick(cell, x, y) {
		console.log([x/10, y/10]);
		this.props.toggleCell(cell);
	}

	handleMouseDown() {
		this.setState((state, props) => {
			return { mouseIsDown: true };
		});
	}

	handleMouseUp() {
		this.setState((state, props) => {
			return { mouseIsDown: false };
		});
	}

	handleMouseOver(cell) {
		if (this.state.mouseIsDown) {
			this.props.toggleCell(cell);
		}
	}

	renderSquares() {
		return this.props.matrix.map((square) => {
			return (
				<Rect key={square.id} x={square.x} y={square.y} width={10} height={10}
							stroke='black' strokeWidth={1} fill={square.alive ? 'DeepSkyBlue' : 'white'}
							onClick={this.handleClick.bind(this, square.id, square.x, square.y)}
							onMouseOver={this.handleMouseOver.bind(this, square.id)}
				/>
			);
		});
	}

	render() {
		return (
			<div className='main-screen' 
					 onMouseDown={this.handleMouseDown.bind(this)}
					 onMouseUp={this.handleMouseUp.bind(this)}
			>
				<Stage width={700} height={400}>
					<Layer>
						{this.renderSquares()}
					</Layer>
				</Stage>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		matrix: state.matrix
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ toggleCell }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);