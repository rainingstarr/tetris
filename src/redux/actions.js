export const MOVE_DOWN = 'MOVE_DOWN';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const ROTATE = 'ROTATE';

export const moveDown = () => ({
  type: MOVE_DOWN,
});

export const moveLeft = () => ({
  type: MOVE_LEFT,
});

export const moveRight = () => ({
  type: MOVE_RIGHT,
});

export const rotate = () => ({
  type: ROTATE,
});
