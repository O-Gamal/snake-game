import {
  canvas,
  canvasContext,
  BG_COLOR,
  BLOCK_SIZE,
} from './game_configuration';

class Board {
  constructor(rows: number, cols: number) {
    canvas.width = cols * BLOCK_SIZE;
    canvas.height = rows * BLOCK_SIZE;
  }

  update = () => {
    canvasContext.fillStyle = BG_COLOR || 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  };
}
export default Board;
