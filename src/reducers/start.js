import { SELECT_LEVEL } from '../actions/start'

const initialState = {
	level: 'normal',
	bla: 'g23g23g',
}
export function startReducer(state = initialState, action) {
	switch (action.type) {
		case SELECT_LEVEL:
			return {
				...state,
				level: action.payload,
			}
		default:
			return state
	}
}
