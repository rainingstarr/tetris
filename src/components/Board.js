const Board = ({ board }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className={`board-cell ${cell}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
