// snake.js
const canvas = document.getElementById('snakeBoard');
const ctx = canvas.getContext('2d');
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let fruit;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }

        snake.checkCollision();
        document.querySelector('.score')
            .innerText = 'Счет: ' + (snake.total - 3);
    }, 250);
}());

window.addEventListener('keydown', (e) => {
    const direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
});

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 3;
    this.tail = [];

    this.draw = function() {
        const fillStyles = ["#c5b02a", "#c5b02a","#4CAF50","#4CAF50"];
        ctx.fillStyle = fillStyles[0];


        for (let i = 0; i < this.tail.length; i++) {
            // console.log({"i":i, 'tail':this.tail, 'total':this.total})
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale-1, scale-1);
            ctx.fillStyle = fillStyles[(i + 1) % fillStyles.length];
        }

        ctx.fillRect(this.x, this.y, scale-1, scale-1);
    };

    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x >= canvas.width) {
            this.x = 0;
        }

        if (this.y >= canvas.height) {
            this.y = 0;
        }

        if (this.x < 0) {
            this.x = canvas.width - scale;
        }

        if (this.y < 0) {
            this.y = canvas.height - scale;
        }
    };

    this.changeDirection = function(direction) {
        console.log(direction)
        switch (direction) {
            case 'Up':
            case 'w':
            case 'ц':
                if (this.ySpeed === 0) {
                    this.xSpeed = 0;
                    this.ySpeed = -scale * 1;
                }
                break;
            case 'Down':
            case 's':
            case 'ы':
                if (this.ySpeed === 0) {
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                }
                break;
            case 'Left':
            case 'a':
            case 'ф':
                if (this.xSpeed === 0) {
                    this.xSpeed = -scale * 1;
                    this.ySpeed = 0;
                }
                break;
            case 'Right':
            case 'd':
            case 'в':
                if (this.xSpeed === 0) {
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                }
                break;
        }
    };

    this.eat = function(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            return true;
        }

        return false;
    };

    this.checkCollision = function() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                this.total = 3;
                this.tail = [];
            }
        }
    };
}

function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function() {
        this.x = Math.floor(Math.random() * rows) * scale;
        this.y = Math.floor(Math.random() * columns) * scale;
    };

    this.draw = function() {
        ctx.fillStyle = "#ff0000";
        const scalePart = (scale-1) / 4
        ctx.fillRect(this.x + scalePart, this.y, scale - scalePart*2, scale);
        ctx.fillRect(this.x, this.y + scalePart, scale, scale - scalePart*2);
    };
}
