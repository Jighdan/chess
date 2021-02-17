const range = (from, to, step) => ({
	*[Symbol.iterator]() {
		for (let value = from; value < to; value = value + step) {
			yield value;
		}
	},
});

export default range;
