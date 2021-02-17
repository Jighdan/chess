import Piece from "./../Piece";

export default class Queen extends Piece {
	constructor({ color, position }) {
		super({ type: "queen", color, position });
	}
}
