import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { arrForCards } from '../actions/cardGenerate'
import * as gameActions from '../actions/gameAction'
import CardField from '../components/cardField'
import ResetNScore from '../components/resetAndScore'
import './style.scss'

export class Game extends Component {
	componentDidMount() {
		this.props.actions.setCardArray(arrForCards())
		let lvl = ''
		switch (this.props.start.level) {
			case 'easy':
				lvl = 8
				break
			case 'normal':
				lvl = 5
				break
			case 'hard':
				lvl = 3
				break
			default:
				lvl = 5
		}
		setTimeout(() => {
			this.props.actions.flipAllCards()
			setTimeout(() => {
				this.props.actions.flipAllCards()
				this.props.actions.blockClick(false)
			}, lvl * 1000)
		}, 500)
	}

	render() {
		const {
 game, actions, finishGame, reset 
} = this.props
		return (
			<div>
				<ResetNScore
					block={this.props.game.clickBlock}
					score={game.score}
					reset={reset}
				/>
				<CardField
					data={game}
					finish={finishGame}
					actions={actions}
					cardArray={game.cardArray}
					allFront={game.allFront}
					clickCard={actions.clickCard}
				/>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		game: store.game,
		start: store.start,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(gameActions, dispatch),
		finishGame: () => {
			dispatch(push('/finish'))
		},
		reset: () => {
			dispatch({ type: 'STATE_RESET' })
		},
	}
}

Game.propTypes = {
	game: PropTypes.object.isRequired,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Game)
