const GAME_SIZE = 600;
const SQUARE_SIZE = 20;
const canvas = document.getElementById('game'); // Je recupere le canva
let point = document.getElementById('point');
let cpt = -1;
const ctx = canvas.getContext('2d'); // getContext me permet de dessiner
const snake = new Snake(SQUARE_SIZE);
const food = new Food();
let currentDirection = "right";

/*------------------DEPLACEMENT DU SNAKE ------------------*/

function detecKeyPressed() {
    document.addEventListener('keydown', function (event) { // Cette function va permettre de faire une action quand on effectue une touche au clavier
        switch (event.key) {
            case "ArrowLeft":
                currentDirection = "left";
                break;

            case "ArrowRight":
                currentDirection = "right";
                break;

            case "ArrowUp":
                currentDirection = "up";
                break;

            case "ArrowDown":
                currentDirection = "down";
                break;

            default:
                break;
        }
    })
}

/*------------------DEPLACEMENT DU SNAKE ------------------*/

function clearScreen() {
    ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE); // actualiser le canvas
}

function update() {
    clearScreen();
    food.draw();
    snake.update();

    if (snake.alive) {
        setTimeout(update, 100); // cette fonction seras rappeler toute les 300ms
    }

}

function affiche_point() {
    cpt++;
    point.innerHTML = cpt;
}

function start() {
    update();
    detecKeyPressed();
    affiche_point();
}



start();