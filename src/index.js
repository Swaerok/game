import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './routes/routes'
import './containers/style.scss'
import { store } from './store/configStore'
import { Router } from 'react-router-dom'
import history from './history/history'

render(
	<Provider store={store}>
		<Router history={history}>
			<Routes />
		</Router>
	</Provider>,
	document.getElementById('root'),
)
