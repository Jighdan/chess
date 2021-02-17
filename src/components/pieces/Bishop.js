import Piece from "./../Piece";

export default class Bishop extends Piece {
	constructor({ color, position }) {
		super({ type: "bishop", color, position });
	}
}
