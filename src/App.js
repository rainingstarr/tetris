import { useState } from "react";
import Board from "./components/Board";
import { createBoard } from "./utils/boardHelpers";
import { useInterval } from "./utils/useInterval";
import { randomTetromino } from "./utils/tetrominos";

const App = () => {
  const [board, setBoard] = useState(createBoard());
  // const [tetromino, setTetromino] = useState(randomTetromino());
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);

  // useInterval(() => {
  //   // 게임 로직을 여기에 구현하세요.
  //   // 예를 들어, 테트리스 블록을 아래로 움직이게 하고 충돌이 일어나면 다음 블록을 생성하도록 합니다.
  // }, 1000);
  console.log(board);
  return (
    <div>
      <Board board={board} />
      {gameOver && <div>게임 오버</div>}
    </div>
  );
};

export default App;