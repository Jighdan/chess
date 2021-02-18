import pieces from "../components/pieces/index";
import Board from "../components/Board";

const getPieceFromCharacter = (character) => {
	const color = character === character.toUpperCase() ? "black" : "white";
	const types = {
		p: "pawn",
		r: "rook",
		n: "knight",
		b: "bishop",
		q: "queen",
		k: "king",
	};

	const piece = pieces[types[character.toLowerCase()]];
	return new piece({ color });
};

const generateFromFen = (fen) => {
	const board = new Board();
	const piecePlacement = fen.split(" ")[0];

	// Keep track of rank and files. Rank starts at the last index
	let currentRank = 7;
	let currentFile = 0;

	// Populate the board
	for (let character of piecePlacement.split("")) {
		if (character === "/") {
			currentFile = 0;
			currentRank--;
		} else {
			// If the character is a number skip some iterations
			if (!isNaN(character) && !isNaN(parseFloat(character))) {
				const numberOfFilesToSkip = parseInt(character);
				currentFile += numberOfFilesToSkip;
			} else {
				// If the character is a string proceed as expected
				const piece = getPieceFromCharacter(character);
				const squareNumber = currentRank * 8 + currentFile;

				// Add the piece to the board
				board.squares[squareNumber].appendChild(piece.render());
				currentFile++;
			}
		}
	}

	return board.render();
};

export default generateFromFen;
