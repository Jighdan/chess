import Piece from "./../Piece";

export default class King extends Piece {
	constructor({ color, position }) {
		super({ type: "king", color, position });
	}
}
