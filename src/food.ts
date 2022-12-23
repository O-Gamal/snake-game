import { BOARD_COLS, BOARD_ROWS } from './globals';

class Food {
  constructor(
    blockSize: number,
    context: CanvasRenderingContext2D,
    color?: string
  ) {
    context.fillStyle = color || 'white';
    context.fillRect(
      Math.floor(Math.random() * BOARD_COLS) * blockSize,
      Math.floor(Math.random() * BOARD_ROWS) * blockSize,
      blockSize,
      blockSize
    );
  }
}

export default Food;
