import generateBoardFromFen from "./library/generateBoard";

window.addEventListener("DOMContentLoaded", () => {
	const startingFen =
		"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
	generateBoardFromFen(startingFen);
});
