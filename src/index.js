import Board from "./components/Board";

const instanceOfBoard = new Board();

window.addEventListener("DOMContentLoaded", () => {
	instanceOfBoard.render();
});
