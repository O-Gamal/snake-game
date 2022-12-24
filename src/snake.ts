import {
  canvasContext,
  SNAKE_COLOR,
  BLOCK_SIZE,
  BOARD_COLS,
  BOARD_ROWS,
} from './game_configuration';
class Snake {
  private velocityX: number;
  private velocityY: number;
  private positionX: number;
  private positionY: number;
  private body: number[][] = [];
  private gameOver: boolean;

  constructor(positionX: number, positionY: number) {
    this.velocityX = 0;
    this.velocityY = 0;

    this.gameOver = false;

    this.positionX = positionX * BLOCK_SIZE;
    this.positionY = positionY * BLOCK_SIZE;
  }

  changeDirection = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowUp':
        if (this.velocityY !== 1) {
          this.velocityX = 0;
          this.velocityY = -1;
        }
        break;

      case 'ArrowDown':
        if (this.velocityY !== -1) {
          this.velocityX = 0;
          this.velocityY = 1;
        }
        break;

      case 'ArrowRight':
        if (this.velocityX !== -1) {
          this.velocityX = 1;
          this.velocityY = 0;
        }
        break;

      case 'ArrowLeft':
        if (this.velocityX !== 1) {
          this.velocityX = -1;
          this.velocityY = 0;
        }
        break;
    }
  };

  update = () => {
    this.positionX += this.velocityX * BLOCK_SIZE;
    this.positionY += this.velocityY * BLOCK_SIZE;

    canvasContext.fillStyle = SNAKE_COLOR;
    canvasContext.fillRect(
      this.positionX,
      this.positionY,
      BLOCK_SIZE,
      BLOCK_SIZE
    );

    this.body.forEach((bodyElem) => {
      canvasContext.fillRect(bodyElem[0], bodyElem[1], BLOCK_SIZE, BLOCK_SIZE);
    });

    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i] = this.body[i - 1];
    }
    this.body.forEach((bodyElem) => {
      if (bodyElem[0] === this.positionX && bodyElem[1] === this.positionY) {
        this.gameOver = true;
      }
    });

    if (this.body.length) {
      this.body[0] = [this.positionX, this.positionY];
    }

    if (
      this.positionX < 0 ||
      this.positionX > BOARD_COLS * BLOCK_SIZE - BLOCK_SIZE ||
      this.positionY < 0 ||
      this.positionY > BOARD_ROWS * BLOCK_SIZE - BLOCK_SIZE
    ) {
      this.gameOver = true;
    }
  };

  pushBody = (x: number, y: number) => {
    this.body.push([x, y]);
  };

  public get x(): number {
    return this.positionX;
  }

  public get y(): number {
    return this.positionY;
  }

  public get isGameOver(): boolean {
    return this.gameOver;
  }
}

export default Snake;
