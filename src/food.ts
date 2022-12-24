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
    canvasContext.fillStyle = FOOD_COLOR || 'white';
    canvasContext.fillRect(
      this.positionX,
      this.positionY,
      BLOCK_SIZE,
      BLOCK_SIZE
    );
  };

  public get x(): number {
    return this.positionX;
  }

  public get y(): number {
    return this.positionY;
  }
}

export default Food;
