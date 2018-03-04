import React, { Component } from 'react';
import './App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null)
		};
	}
	renderSquare(i) {
		return <Square value={i} />;
	}

	render() {
		const status = 'Next player: X';

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
			</div>
		);
	}
}
