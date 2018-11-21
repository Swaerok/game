import {
	SET_CARD_ARRAY,
	FLIP_CARD_FRONT,
	SET_SELECTED_CARD,
	HIDE_CARD,
	BLOCK_CLICK,
	SET_SCORE,
	SET_GUESSED_CARDS,
	FLIP_ALL_CARDS,
} from '../actions/gameAction'

const initialState = {
	toggle: true,
	cardArray: [],
	selectedCard: null,
	clickBlock: true,
	score: 0,
	allFront: false,
	guessedCard: 0,
}

export function gameReducer(state = initialState, action) {
	switch (action.type) {
		case FLIP_ALL_CARDS:
			return {
				...state,
				allFront: !state.allFront,
			}
		case SET_GUESSED_CARDS:
			return {
				...state,
				guessedCard: action.payload,
			}
		case SET_SCORE:
			return {
				...state,
				score: +state.score + +action.payload,
			}
		case BLOCK_CLICK:
			return {
				...state,
				clickBlock: action.payload,
			}
		case SET_SELECTED_CARD:
			return {
				...state,
				selectedCard: action.payload,
			}
		case FLIP_CARD_FRONT:
			state.cardArray[action.payload.card].front = action.payload.bool
			return {
				...state,
				cardArray: state.cardArray,
			}
		case HIDE_CARD:
			state.cardArray[action.payload.card].isVisible = action.payload.bool
			return {
				...state,
				cardArray: state.cardArray,
			}
		case SET_CARD_ARRAY:
			return {
				...state,
				cardArray: action.payload,
			}
		default:
			return state
	}
}
