import Piece from "./../Piece";

export default class Knight extends Piece {
	constructor({ color, position }) {
		super({ type: "knight", color, position });
	}
}
