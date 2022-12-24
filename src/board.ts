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
    canvasContext.fillStyle = BG_COLOR;
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    // canvasContext.fillStyle = 'crimson';
    // canvasContext.fillRect(0, 0, BLOCK_SIZE, canvas.height);
    // canvasContext.fillRect(0, 0, canvas.width, BLOCK_SIZE);
    // canvasContext.fillRect(
    //   canvas.width - BLOCK_SIZE,
    //   0,
    //   BLOCK_SIZE,
    //   canvas.height
    // );
    // canvasContext.fillRect(
    //   0,
    //   canvas.height - BLOCK_SIZE,
    //   canvas.width,
    //   BLOCK_SIZE
    // );
  };
}
export default Board;
