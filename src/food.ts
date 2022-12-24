import {
  BOARD_COLS,
  BOARD_ROWS,
  FOOD_COLOR,
  canvasContext,
  BLOCK_SIZE,
} from './game_configuration';

class Food {
  private positionX: number;
  private positionY: number;

  constructor() {
    this.positionX = Math.floor(Math.random() * BOARD_COLS) * BLOCK_SIZE;
    this.positionY = Math.floor(Math.random() * BOARD_ROWS) * BLOCK_SIZE;
  }

  placeFood = () => {
    this.positionX = Math.floor(Math.random() * BOARD_COLS) * BLOCK_SIZE;
    this.positionY = Math.floor(Math.random() * BOARD_ROWS) * BLOCK_SIZE;
  };

  update = () => {
    canvasContext.fillStyle = FOOD_COLOR;
    canvasContext.beginPath();
    canvasContext.arc(
      this.positionX + BLOCK_SIZE / 2,
      this.positionY + BLOCK_SIZE / 2,
      BLOCK_SIZE / 2,
      0,
      2 * Math.PI
    );
    canvasContext.fill();
  };

  public get x(): number {
    return this.positionX;
  }

  public get y(): number {
    return this.positionY;
  }
}

export default Food;
