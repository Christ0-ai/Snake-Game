class Block{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = y;
        this.size = size;
    }

    // METHODE

    

    /*------------------------- CAS OU LE SNAKE SORT DU CANVAS ---------------------------*/

    outOfMap(){
        const maxSize = GAME_SIZE / this.size;

        if(this.x < 0){
            this.x = maxSize;
        }else if (this.x > maxSize){
            this.x = 0;
        }

        if(this.y < 0){
            this.y = maxSize;
        }else if (this.y > maxSize){
            this.y = 0;
        }
    }

    /*------------------------- CAS OU LE SNAKE SORT DU CANVAS ---------------------------*/


    setPosition(x,y){
        this.oldX = this.x;
        this.oldY = this.y;
        this.x = x;
        this.y = y;
    }

  /*------------------------- DESSIN DU SNAKE ---------------------------*/

    draw(){
        ctx.fillStyle = "red"; // Changer la couleur
        ctx.fillRect(this.x * this.size ,this.y * this.size ,this.size,this.size) // fillRect me permet de dessiner des rectangles
    }

    /*------------------------- DESSIN DU SNAKE ---------------------------*/
    // METHODE
}