class Snake{
    constructor(){
       
        this.length = 5
        this.x = 500
        this.y = 500
        this.turns = [] 
        this.headDirection = "left"
        
        this.head = createSprite( this.x, this.y, 15, 15)
        this.head.shapeColor = "red"
        this.body = new Group()

        for (var i = 0; i < 5; i++ ){
            var bodypart = createSprite(this.x + 15 + i*10 , this.y, 10, 10)
            bodypart.shapeColor = "green"
            this.body.add(bodypart)
            
            
        }
        
    }

    moveLeft(){
        var turnposition = [this.head.position.x, this.head.position.y]
        
        if(this.headDirection != "left"){
            this.turns.push(turnposition)
            this.headDirection = "left"
        }
        
        this.head.position.x -= 5
        console.log("turning the snake left")
        

        
        
    }

    moveRight(){
        var turnposition = [this.head.position.x, this.head.position.y]
        
        if(this.headDirection != "right"){
            this.turns.push(turnposition)
            this.headDirection = "right"
        }
        
        this.head.position.x += 5
        console.log("turning the snake right")

        
        
    }
    
    moveUp(){
        var turnposition = [this.head.position.x, this.head.position.y]
        
        if(this.headDirection != "up"){
            this.turns.push(turnposition)
            this.headDirection = "up"

        }
        
        this.head.position.y -= 5
        console.log("turning the snake up")

        
        
    }

    moveDown(){
        var turnposition = [this.head.position.x, this.head.position.y]
        
        if(this.headDirection != "down"){
            this.turns.push(turnposition)
            this.headDirection = "down"

        }
        
        this.head.position.y += 5
        console.log("turning the snake up")

        
        
    }
} 