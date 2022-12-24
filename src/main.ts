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

let interval: number, updateInterval: number;
let board: Board, snake: Snake, food: Food;

let playAgainButton: HTMLButtonElement;

window.onload = function () {
  playAgainButton = <HTMLButtonElement>document.getElementById('play-again');
  playAgainButton.addEventListener('click', start);
  start();
};

function start() {
  playAgainButton.disabled = true;
  interval = 150;
  board = new Board(BOARD_ROWS, BOARD_COLS);
  snake = new Snake(SNAKE_POSITION_X, SNAKE_POSITION_Y);
  food = new Food();
  document.addEventListener('keyup', snake.changeDirection);
  clearInterval(updateInterval);
  updateInterval = setInterval(update, interval);
}

function update() {
  if (snake.isGameOver) {
    playAgainButton.disabled = false;
    return;
  }

  board.update();
  food.update();
  snake.update();

  if (snake.x === food.x && snake.y === food.y) {
    snake.pushBody(food.x, food.y);
    food.placeFood();
    interval--;
    clearInterval(updateInterval);
    updateInterval = setInterval(update, interval);
  }
}
