import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class StartComponent extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handlerClick.bind(this)
	}

	handlerClick(e) {
		this.props.setLevel(e.target.value)
	}

	render() {
		console.log(this.props)
		return (
			<div className="start">
				<div>
					<img draggable="false" src={'../Новая папка (2)/StartGame.png'} />
				</div>
				<span className="start__title">MEMORY GAME</span>
				<div className="start__level">
					<label>
						<span>Уровень сложности:</span>
						<br />
						<select value={this.props.level} onChange={this.handleClick}>
							<option value="easy">Легко</option>
							<option value="normal">Нормально</option>
							<option value="hard">Тяжело</option>
						</select>
					</label>
				</div>
				<Link to="/game">
					<button className="start__button">Начать игру</button>
				</Link>
			</div>
		)
	}
}

export default StartComponent
