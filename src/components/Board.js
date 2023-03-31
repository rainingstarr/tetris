function Board (props) {
  return (
    <div>
      {props.board.map(
        row => row.map(
          (type,i) =>
          <div key={i} className={"cell"}>
            {type}
          </div>
        )
      )}
    </div>
  );
}

export default Board;
