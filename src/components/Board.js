import range from "../library/range";
import Square from "./Square";

export default class Board {
	constructor() {
		this.element = document.getElementById("board");
		this.squares = [...range(0, 64, 1)].map((_) => new Square());
	}

	render() {
		const renderedSquares = this.squares.map((square) => square.render());

		this.element.append(...renderedSquares);
	}
}
