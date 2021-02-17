const generateId = (word) => {
	const template = "xxxx-xyxx";
	const regexPattern = /[xy]/g;

	const id = template.replace(regexPattern, (character) => {
		let randomNumber = (Math.random() * 16) | 0;
		let vector = character == "x" ? randomNumber : (randomNumber & 0x3) | 0x8;
		return vector.toString();
	});

	return word ? word.concat("-", id) : id;
};

export default generateId;
