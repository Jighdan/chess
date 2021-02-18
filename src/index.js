import generateBoardFromFen from "./library/generateBoard";

const startingFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

window.addEventListener("DOMContentLoaded", () => {
	const board = generateBoardFromFen(startingFen);
	board.render();
});
