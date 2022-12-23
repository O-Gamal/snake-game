import './style.css';
import Board from './board';
import Snake from './snake';
import Food from './food';
import {
  BLOCK_SIZE,
  BOARD_COLS,
  BOARD_ROWS,
  SNAKE_POSITION_X,
  SNAKE_POSITION_Y,
} from './globals';

const board = new Board(BLOCK_SIZE, BOARD_COLS, BOARD_ROWS);
const snake = new Snake(
  BLOCK_SIZE,
  SNAKE_POSITION_X,
  SNAKE_POSITION_Y,
  board.getContext(),
  'white'
);
const food = new Food(BLOCK_SIZE, board.getContext(), 'green');

document.addEventListener('keyup', snake.changeDirection);
