import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './cards'
import history from '../history/history'

class CardField extends Component {
	clickCard = (card) => {
		const { data, actions } = this.props
		if (
			data.cardArray[card].front
			|| !data.cardArray[card].isVisible
			|| data.clickBlock
		) {
			return false
		}
		actions.flipCardFront(card, true)
		if (data.selectedCard !== null) {
			actions.blockClick(true)
			this.active = card
			this.selected = data.selectedCard
			this.move()
		} else {
			actions.setSelectedCard(card)
		}
	}

	move = () => {
		const { data, actions } = this.props
		const active = this.active
		const selected = this.selected
		const activeValue = data.cardArray[active].value
		const selectedValue = data.cardArray[selected].value
		if (activeValue === selectedValue) {
			const num = data.guessedCard + 2
			setTimeout(() => {
				this.flipCards([active, selected])
				this.hideCards([active, selected])
				actions.setSelectedCard()
				actions.blockClick(false)
				actions.setScore(68)
				actions.guessedCards(num)
				this.finishGame(num)
			}, 1200)
		} else {
			setTimeout(() => {
				this.flipCards([active, selected])
				actions.setSelectedCard()
				actions.blockClick(false)
				actions.setScore(-68)
			}, 1200)
		}
	}

	hideCards = (cards) => {
		cards.forEach((item) => {
			this.props.actions.hideCard(item)
		})
	}

	flipCards = (cards) => {
		cards.forEach((item) => {
			this.props.actions.flipCardFront(item)
		})
	}

	finishGame = (num) => {
		if (num !== 18) {
			return false
		}
		history.push('/finish')
	}

	render() {
		const { cardArray, allFront } = this.props
		return (
			<div className="cardField">
				{cardArray.map((item, index) => {
					return (
						<Article
							key={index}
							data={item}
							allFront={allFront}
							clickCard={this.clickCard}
						/>
					)
				})}
			</div>
		)
	}
}

CardField.propTypes = {
	cardArray: PropTypes.array.isRequired,
	allFront: PropTypes.bool.isRequired,
}

export default CardField
