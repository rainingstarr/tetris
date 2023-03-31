export function createBoard () {
    const board = [];
    for (let y = 0; y < 20; y++) {
        board[y] = [];
        for (let x = 0; x < 10; x++) {
        board[y][x] = ["clear"];
        }
    }
    return board;
}