export default class Square {
	constructor() {
		this.element = document.createElement("div");
		this.element.classList.add("board-square");
	}

	onDragEnter(event) {
		event.preventDefault();
		event.target.classList.add("board-square-highlight");
	}

	onDragOver(event) {
		event.preventDefault();
		event.target.classList.add("board-square-highlight");
	}

	onDragLeave(event) {
		event.target.classList.remove("board-square-highlight");
	}

	onDrop(event) {
		event.target.classList.remove("board-square-highlight");

		// Fetch the element that is being dragged
		const elementBeingDraggedId = event.dataTransfer.getData("text/plain");
		const elementBeingDragged = document.getElementById(elementBeingDraggedId);

		// Add the element to the square
		event.target.appendChild(elementBeingDragged);

		// Display the element
		elementBeingDragged.classList.remove("piece-hide");
	}

	addEvents() {
		this.element.addEventListener("dragenter", this.onDragEnter);
		this.element.addEventListener("dragover", this.onDragOver);
		this.element.addEventListener("dragleave", this.onDragLeave);
		this.element.addEventListener("drop", this.onDrop);
	}

	render() {
		this.addEvents();
		return this.element;
	}
}
