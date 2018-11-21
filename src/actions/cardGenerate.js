function tures(arr, num) {
	if (arr.indexOf(num) > -1) {
		return true
	}
	return false
}

function gou(from, to, num) {
	let random
	const arrays = []
	for (let i = 0; i < num; i++) {
		do {
			random = Math.floor(Math.random() * (from - to)) + to
		} while (tures(arrays, random))

		arrays.push(random)
	}
	return arrays
}

function compareRandom() {
	return Math.random() - 0.5
}

export function arrForCards() {
	let arr = gou(1, 52, 9)

	arr = arr.concat(arr)
	arr.sort(compareRandom)

	return arr
}