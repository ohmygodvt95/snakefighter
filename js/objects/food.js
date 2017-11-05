function Food() {
    this.genXY = function() {
        this.x = SIZE * Math.round(random(1, WIDTH / SIZE - 1));
        this.y = SIZE * Math.round(random(1, HEIGHT / SIZE - 1));
    };

    this.genXY();

    this.show = function () {
        fill('red');
        rect(this.x, this.y, SIZE, SIZE);
    };

    this.update = function () {
        this.genXY();
    };


}
