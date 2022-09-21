class Food{
    constructor(){
        this.size = SQUARE_SIZE;
        this.setRandomPosition();
    }

    // METHODE

    setRandomPosition(){
        const maxSize =  ((GAME_SIZE/ this.size) -1);
        this.x = Math.round(Math.random() * GAME_SIZE % maxSize); // Math.random genre un nombre aléatoire entre 0 et 1
        this.y = Math.round(Math.random() * GAME_SIZE % maxSize);

        // nombre entre 0 & 1 * la taille de l'écran (30) modulo ( taille de l'écran / la taille du block)
    }


    draw(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x * this.size,this.y * this.size, this.size,this.size)

    }
    // METHODE
}