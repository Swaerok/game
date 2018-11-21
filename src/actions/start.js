export const SELECT_LEVEL = 'SELECT_LEVEL'

export function setLevel(level) {
	return (dispatch) => {
		dispatch({
			type: SELECT_LEVEL,
			payload: level,
		})
	}
}
