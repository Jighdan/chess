import Piece from "./../Piece";

export default class Pawn extends Piece {
	constructor({ color, position }) {
		super({ type: "pawn", color, position });
	}
}
