import Piece from "../Piece";

export default class Rook extends Piece {
	constructor({ color, position }) {
		super({ type: "rook", color, position });
	}
}
