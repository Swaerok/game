import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Game from '../containers/Game'
import Start from '../containers/Start'
import Finish from '../containers/Finish'

const Routes = () => {
	return (
		<div className="game">
			<Switch>
				<Route exact path="/" component={Start} />
				<Route path="/game" component={Game} />
				<Route path="/finish" component={Finish} />
			</Switch>
		</div>
	)
}

export default Routes
