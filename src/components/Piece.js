import icons from "../library/piecesIconsLinks";
import generateId from "../library/idGenerator";

export default class Piece {
	constructor({ type, color }) {
		// Setting the meta attributes
		this.color = color;
		this.icon = icons[type][color];
		this.id = generateId(`${type}-${color}`);

		// Setting the view attributes
		this.element = document.createElement("img");
		this.element.classList.add("piece");
		this.element.setAttribute("src", this.icon);
		this.element.setAttribute("id", this.id);
		this.element.setAttribute("draggable", "true");
	}

	onDragStart(event) {
		event.dataTransfer.setData("text/plain", this.id);
		// Adding a timeout so the element doesn't disappear
		// right when it's being dragged
		setTimeout(() => event.target.classList.add("piece-hide"), 0);
	}

	addEvents() {
		this.element.addEventListener("dragstart", this.onDragStart);
	}

	render() {
		this.addEvents();
		return this.element;
	}
}
