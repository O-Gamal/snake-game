import './style.css';
import Board from './board';
import Snake from './snake';
import Food from './food';
import {
  BOARD_COLS,
  BOARD_ROWS,
  SNAKE_POSITION_X,
  SNAKE_POSITION_Y,
} from './game_configuration';

let board: Board, snake: Snake, food: Food;

window.onload = function () {
  board = new Board(BOARD_COLS, BOARD_ROWS);
  snake = new Snake(SNAKE_POSITION_X, SNAKE_POSITION_Y);
  food = new Food();
  document.addEventListener('keyup', snake.changeDirection);
  setInterval(update, 100);
};

function update() {
  if (snake.isGameOver) {
    return;
  }

  board.update();
  food.update();
  snake.update();

  if (snake.x === food.x && snake.y === food.y) {
    snake.pushBody(food.x, food.y);
    food.placeFood();
  }
}
