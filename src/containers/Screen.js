import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layer, Stage, Rect } from 'react-konva';
import { bindActionCreators } from 'redux';
import { toggleCell } from '../actions';

class Screen extends Component {

	handleClick(cell) {
		this.props.toggleCell(cell);
	}

	renderSquares() {
		return this.props.matrix.map((square) => {
			return (
				<Rect key={square.id} x={square.x} y={square.y} width={10} height={10}
							stroke='black' strokeWidth={1} fill={square.color}
							onClick={this.handleClick.bind(this, square.id)}
				/>
			);
		});
	}

	render() {
		return (
			<div className='main-screen'>
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