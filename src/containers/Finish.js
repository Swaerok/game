import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FinishComponent from '../components/finish'
import './style.scss'

export class Finish extends Component {
	render() {
		const { score, reset } = this.props
		return (
			<div>
				<FinishComponent score={score} reset={reset} />
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		score: store.game.score,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		reset: () => {
			dispatch({ type: 'STATE_RESET' })
		},
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Finish)
