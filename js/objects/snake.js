function Snake() {
    this.x = SIZE * Math.round(random(1, WIDTH / SIZE - 1));
    this.y = SIZE * Math.round(random(0, HEIGHT / SIZE - 1));
    this.direction = 'right';
    this.body = [{x: this.x, y: this.y}];

    this.show = function () {
        fill('#29B6F6');
        for(var i = 0; i < this.body.length; i++){
            rect(this.body[i].x, this.body[i].y, SIZE, SIZE);
        }
        fill('#2962FF');
        rect(this.x, this.y, SIZE, SIZE);

    };

    this.move = function (direction) {
        if(this.direction === 'right' && direction === 'left') return false;
        if(this.direction === 'left' && direction === 'right') return false;
        if(this.direction === 'up' && direction === 'down') return false;
        if(this.direction === 'down' && direction === 'up') return false;
        if(this.direction !== direction) this.direction = direction;
    };



    this.update = function () {
        this.show();

        switch(this.direction) {
            case 'right':
                this.moving(SIZE, 0);
                break;
            case 'left':
                this.moving(- SIZE, 0);
                break;
            case 'up':
                this.moving(0, - SIZE);
                break;
            case 'down':
                this.moving(0, SIZE);
                break;
        }
    };

    this.moving = function (xValue, yValue) {
        for(var i = 0; i < this.body.length - 1; i++) {
            this.body[i] = this.body[i + 1];
        }

        this.x += xValue;
        this.y += yValue;

        if(this.x === WIDTH) this.x = 0;
        else if(this.x < 0) this.x = WIDTH - SIZE;

        if(this.y === HEIGHT) this.y = 0;
        else if(this.y < 0) this.y = HEIGHT - SIZE;



        this.body[this.body.length - 1] = {
            x: this.x,
            y: this.y
        };
    };

    this.canEatFood = function (food) {
        return dist(this.x, this.y, food.x, food.y) === 0;
    };

    this.eat = function (food) {
        this.body.push(food);
    };
}
