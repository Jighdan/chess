import Square from "./Square";

export default class Board {
	constructor() {
		this.squares = document.querySelectorAll("div[class=board-square]");

		this.squares.forEach((element) => new Square(element).render());
	}

	render() {}
}
