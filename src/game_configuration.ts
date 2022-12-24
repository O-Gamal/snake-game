export const canvas = <HTMLCanvasElement>document.getElementById('board');
export const canvasContext = <CanvasRenderingContext2D>canvas.getContext('2d');
export const BLOCK_SIZE = 25;
export const BOARD_COLS = screen.width < 500 ? 12 : 40;
export const BOARD_ROWS = screen.width < 500 ? 20 : 20;
export const SNAKE_POSITION_X = 5;
export const SNAKE_POSITION_Y = 5;
export const BG_COLOR = '#171717';
export const SNAKE_COLOR = '#6a0ff0';
export const FOOD_COLOR = '#03874d';

canvas.width = BOARD_COLS * BLOCK_SIZE;
canvas.height = BOARD_ROWS * BLOCK_SIZE;
