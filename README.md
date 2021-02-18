# Chess

A simple chess game made for practicing programming concepts.

## MVP

1. There's a visible board.
2. Pieces can be placed on the board.
3. Pieces can be moved across the board.
4. Pieces position are loaded dynamically (Through a notation FEN / PNG)
5. Pieces have their own set of possible moves.
6. Pieces moves are based on a set of legal moves (Cannot make a move that would leave my king on check).
7. Pawns can commit 2 steps on their first move.
8. I can make a castle move.
9. I can make an En passant move.

## Get Started

```
	# Install the dependencies
	$ yarn install

	# Start in Production mode
	$ yarn build;

	# Start in Development mode
	$ yarn dev;
```

## Resources

- [Chess Rules](https://www.wikiwand.com/en/Chess#/Rules)
- [Chess Pieces Unicode](https://www.w3schools.com/charsets/ref_utf_symbols.asp)
- [Chess Pieces Images](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces)
- [Drag and Drop with JavaScript](https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/)
- [Forsyth Edwards Notation: In Depth](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)
- [Forsyth Edwards Notation: Basics](https://www.chess.com/terms/fen-chess)
