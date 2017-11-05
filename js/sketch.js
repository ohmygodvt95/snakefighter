var canvas;
var snake;
var food;

function grid() {
    fill(200, 200, 200);
    for(var i = 0; i <= WIDTH / SIZE; i++) {
        line(i * SIZE, 0, i * SIZE, HEIGHT);
    }

    for(var i = 0; i <= HEIGHT / SIZE; i++) {
        line(0, i * SIZE, WIDTH, i * SIZE);
    }
}

function setup() {


    canvas = createCanvas(WIDTH + 1, HEIGHT + 1);
    canvas.parent('sketch-holder');

    frameRate(FRAME_PER_SECOND);

    food = new Food();
    snake = new Snake();
}

function draw(){
    background(246, 248, 250);
    grid();
    food.show();
    snake.update();
    if(snake.canEatFood(food)) {
        snake.eat(food);
        food.update();
    }
}

function keyPressed() {
    switch(keyCode) {
        case UP_ARROW:
            snake.move('up');
            break;
        case DOWN_ARROW:
            snake.move('down');
            break;
        case RIGHT_ARROW:
            snake.move('right');
            break;
        case LEFT_ARROW:
            snake.move('left');
            break;
    }
}
