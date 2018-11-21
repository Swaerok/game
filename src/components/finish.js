import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class FinishComponent extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handlerClick.bind(this)
	}

	handlerClick() {
		this.props.reset()
	}

	render() {
		const { score } = this.props
		return (
			<div className="finish">
				<div>
					<img draggable="false" src={'../Новая папка (2)/StartGame.png'} />
				</div>
				<span className="finish__text">Поздравляем!</span>
				<span className="finish__score">Ваш итоговый счёт: {score}</span>
				<Link to="/">
					<button className="finish__button" onClick={this.handleClick}>
						Ещё раз
					</button>
				</Link>
			</div>
		)
	}
}

export default FinishComponent
