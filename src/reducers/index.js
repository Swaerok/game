import { combineReducers } from 'redux'
import { gameReducer } from './gameField'
import { startReducer } from './start'

const allReducer = combineReducers({
	game: gameReducer,
	start: startReducer,
})
export const rootReducer = (state, action) => {
	if (action.type === 'STATE_RESET') {
		console.log(2)
		state = undefined
	}

	return allReducer(state, action)
}
