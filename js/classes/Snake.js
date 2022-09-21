class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.blockSize = SQUARE_SIZE;
        this.blocks = [];
        this.addblock(this.x,this.y);
        this.alive = true;
    }

    // METHODE

    addblock(x,y){
        const block = new Block(x,y,this.blockSize);
        this.blocks.push(block);
    }


    moveHead(){
        const head = this.blocks[0];
        head.oldX = head.x;
        head.oldY = head.y;

        switch (currentDirection){
            case 'left':
                head.x -= 1;
                break;

            case 'right':
                head.x += 1;
                break;
            
            case 'up':
                head.y -= 1;
                break;
                        
            case 'down':
                head.y += 1;
                break;

            default:
                break;
            
        }
        head.outOfMap();
    }


    calculateNewBlockPosition(){
        let {x, y} = this.blocks[this.blocks.length -1];  // cette ecriture est similaire a   let x = head.x  et let y = head.y
        switch (currentDirection) {
            case 'left':
                x += 1;
                break;

            case 'right':
                x -= 1;
                break;
            
            case 'up':
                y += 1;
                break;
                        
            case 'down':
                y -= 1;
                break;

            default:
                break;
        }
            return {x,y};
        
    }

    eat(){
        const head = this.blocks[0];

        if(head.x === food.x && head.y === food.y){
            food.setRandomPosition(); // Si la tete touche la pomme alors la pomme se téléporte
            const {x,y} = this.calculateNewBlockPosition();
            this.addblock(x,y);
            affiche_point();
        }
    }


    blockTouchHead(block){
        const head = this.blocks[0];
        const headX = head.x;
        const headY = head.y;

        return (headX === block.x && headY === block.y);
    }

    update(){

        this.moveHead();
        this.eat();

        for(const [index,block] of this.blocks.entries()){ // le terme "of" permet de parcourir chaque element d'un tableau
            if(index > 0){
                const {oldX,oldY} = this.blocks[index -1];
                block.setPosition(oldX,oldY);

                if(this.blockTouchHead(block)){
                    this.alive = false;
                    alert("GAME OVER");
                }
                
            }
            block.draw();
           
        }
    }
    
    

    // METHODE
}