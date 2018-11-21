import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import history from '../history/history'

class ResetNScore extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handlerClick.bind(this)
	}

	handlerClick() {
		if (this.props.block) {
			return false
		}
		this.props.reset()
		history.push('/')
	}

	render() {
		const { score } = this.props
		return (
			<div className="score-line">
				<div className="reset_game" onClick={this.handleClick}>
					Начать заново
				</div>

				<div>Score {score}</div>
			</div>
		)
	}
}

export default ResetNScore
