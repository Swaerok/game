import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setLevel } from '../actions/start'
import StartComponent from '../components/start'
import './style.scss'

export class Start extends Component {
	render() {
		console.log(this.props.start)
		const { setLevel, start } = this.props
		return (
			<div>
				<StartComponent setLevel={setLevel} level={start.level} />
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	console.log(store)
	return {
		start: store.start,
	}
}
const mapDispatchToProps = {
	setLevel,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Start)
