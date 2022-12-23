class Snake {
  constructor(
    blockSize: number,
    positionX: number,
    positionY: number,
    context: CanvasRenderingContext2D,
    color?: string
  ) {
    context.fillStyle = color || 'white';
    context.fillRect(
      positionX * blockSize,
      positionY * blockSize,
      blockSize,
      blockSize
    );
  }

  public changeDirection() {}
}

export default Snake;
