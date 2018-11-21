export const SET_GUESSED_CARDS = 'SET_GUESSED_CARDS'
export const FLIP_ALL_CARDS = 'FLIP_ALL_CARDS'
export const SET_CARD_ARRAY = 'SET_CARD_ARRAY'
export const SET_SCORE = 'SET_SCORE'
export const FLIP_CARD_FRONT = 'FLIP_CARD_FRONT'
export const SET_SELECTED_CARD = 'SET_SELECTED_CARD'
export const HIDE_CARD = 'HIDE_CARD'
export const BLOCK_CLICK = 'BLOCK_CLICK'

export function guessedCards(num) {
	return (dispatch) => {
		dispatch({
			type: SET_GUESSED_CARDS,
			payload: num,
		})
	}
}
export function hideCard(card, bool = false) {
	return (dispatch) => {
		dispatch({
			type: HIDE_CARD,
			payload: {
				card,
				bool,
			},
		})
	}
}
export function flipAllCards() {
	return (dispatch) => {
		dispatch({
			type: FLIP_ALL_CARDS,
		})
	}
}
export function setSelectedCard(card = null) {
	return (dispatch) => {
		dispatch({
			type: SET_SELECTED_CARD,
			payload: card,
		})
	}
}
export function blockClick(bool) {
	return (dispatch) => {
		dispatch({
			type: BLOCK_CLICK,
			payload: bool,
		})
	}
}
export function flipCardFront(card, bool = false) {
	return (dispatch) => {
		dispatch({
			type: FLIP_CARD_FRONT,
			payload: {
				card,
				bool,
			},
		})
	}
}
export function setScore(num) {
	return (dispatch) => {
		dispatch({
			type: SET_SCORE,
			payload: num,
		})
	}
}
export function setCardArray(arr) {
	const res = []
	arr.forEach((item, index) => {
		const items = {
			id: index,
			value: item,
			isVisible: true,
			front: false,
		}
		res.push(items)
	})
	return (dispatch) => {
		dispatch({
			type: SET_CARD_ARRAY,
			payload: res,
		})
	}
}
