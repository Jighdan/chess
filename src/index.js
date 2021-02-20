import Board from "./components/Board";
import setBoardFromFen from "./library/setBoardFromFen";

const startingFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

window.addEventListener("DOMContentLoaded", () => {
	const instanceOfBoard = new Board();

	setBoardFromFen(instanceOfBoard, startingFen);

	instanceOfBoard.render();
});
