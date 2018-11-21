import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Article extends Component {
	constructor(props) {
		super(props)

		this.handleClicks = this.handleClick.bind(this)
	}

	handleClick() {
		const ids = this.props.data.id
		this.props.clickCard(ids)
	}

	render() {
		const { id, value, isVisible, front } = this.props.data
		return (
			<div
				id={id}
				value={value}
				onClick={this.handleClicks}
				className={`card ${isVisible ? '' : 'hidden'} ${
					front || this.props.allFront ? 'card_front' : ''
				}`}
			>
				<img
					draggable="false"
					className="front"
					src={`../Новая папка (2)/${value}.png`}
				/>
				<img
					draggable="false"
					className="back"
					src="../Новая папка (2)/defCardBack.png"
				/>
			</div>
		)
	}
}
Article.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
		isVisible: PropTypes.bool.isRequired,
		front: PropTypes.bool.isRequired,
	}),
	allFront: PropTypes.bool.isRequired,
	clickCard: PropTypes.func.isRequired,
}

export default Article
