function Food() {
    this.x = SIZE * Math.round(random(1, WIDTH / SIZE - 2));
    this.y = SIZE * Math.round(random(1, HEIGHT / SIZE - 2));

    this.show = function () {
        fill(234, 67, 53);
        rect(this.x, this.y, SIZE, SIZE, SIZE);
    };
}
