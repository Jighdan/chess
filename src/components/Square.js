export default class Square {
	constructor(content) {
		this.element = document.createElement("div");
		this.content = content || null;
		this.element.classList.add("board-square");
	}

	setContent(payload) {
		this.content = payload;
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
		// Fetch the element that is being dragged
		const elementBeingDraggedId = event.dataTransfer.getData("text/plain");
		const elementBeingDragged = document.getElementById(elementBeingDraggedId);

		if (event.target.nodeName !== "IMG") {
			// Remove any element that is within the square element
			event.target.innerHTML = "";

			// Add the dragged element to the square
			event.target.appendChild(elementBeingDragged);
		}

		// Remove the square highlight
		event.target.classList.remove("board-square-highlight");

		// Display the dragged element
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

		if (this.content) {
			this.element.appendChild(this.content.render());
		}

		return this.element;
	}
}
