


const TETROMINOS = [{
      shape: [
        [0, "I", 0, 0],
        [0, "I", 0, 0],
        [0, "I", 0, 0],
        [0, "I", 0, 0]
      ],
      color: "80, 227, 230"
    },
    {
      shape: [
        [0,0,"j",0],
        [0,0,"j",0],
        [0,"j","j",0],
        [0,0,0,0],
      ],
      color: "36, 95, 223"
    },
    {
      shape: [
        [0,0,"L",0],
        [0,0,"L",0],
        [0,0,"L","L"],
        [0,0,0,0],
      ],
      color: "223, 173, 36"
    },
    {
      shape: [
        [0,0,0,0],
        [0,"O","O",0],
        [0,"O","O",0],
        [0,0,0,0],
      ],
      color: "223, 217, 36"
    },
    {
      shape: [
        [0,0,0,0],
        [0,0,"S","S"],
        [0,"S","S",0],
        [0,0,0,0],
      ],
      color: "48, 211, 56"
    },
    {
      shape: [
        [0,0,0,0],
        [0,"T","T","T"],
        [0,0,"T",0],
        [0,0,0,0],
      ],
      color: "132, 61, 198"
    },
    {
      shape: [
        [0,0,0,0],
        ["Z","Z",0,0],
        [0,"Z","Z",0],
        [0,0,0,0],
      ],
      color: "227, 78, 78"
    }
];

function randomTetromino() {
  //0~i 랜덤숫자 생성
  const rand = Math.floor(Math.random() * TETROMINOS.length);
  console.log(rand);
  
    return (TETROMINOS[rand])
}
