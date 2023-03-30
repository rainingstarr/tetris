import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ],
};

const tetrisSlice = createSlice({
  name: 'tetris',
  initialState,
  reducers: {
    moveDown: (state, action) => {
      // TODO: 블록을 아래로 이동시키는 로직 구현
    },
    moveLeft: (state, action) => {
      // TODO: 블록을 왼쪽으로 이동시키는 로직 구현
    },
    moveRight: (state, action) => {
    // TODO: 블록을 오른쪽으로 이동시키는 로직 구현
    },
    rotate: (state, action) => {
    // TODO: 블록을 회전시키는 로직 구현
    },
  },
});
  
  export const { moveDown, moveLeft, moveRight, rotate } = tetrisSlice.actions;
  
  export default configureStore({
    reducer: tetrisSlice.reducer,
  });