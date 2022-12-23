class Board {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(blockSize: number, rows: number, cols: number, bgColor?: string) {
    const boardCanvas = <HTMLCanvasElement>document.getElementById('board');

    let canvasContext = boardCanvas.getContext(
      '2d'
    ) as CanvasRenderingContext2D;

    this.canvas = boardCanvas;
    this.canvas.width = cols * blockSize;
    this.canvas.height = rows * blockSize;
    this.context = canvasContext;
    this.context.fillStyle = bgColor || 'black';
    this.context.fillRect(0, 0, boardCanvas.width, boardCanvas.height);
  }

  public getContext() {
    return this.context;
  }
}
export default Board;
