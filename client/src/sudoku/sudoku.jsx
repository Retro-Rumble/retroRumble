import { getSudoku } from "sudoku-gen";

function Sudoku() {
	const { puzzle, solution, difficulty } = getSudoku();
	const puzzleArr = puzzle.split("");

	return (
		<div className="sudoku-board">
			{puzzleArr.map((clue) => {
				if (clue === "-") {
					return <div className="sudoku-square"></div>;
				}
				return <div className="sudoku-square">{clue}</div>;
			})}
		</div>
	);
}

export default Sudoku;
