var snake, snakeimg
var apple, appleimg






function preload() {

  snakeimg = loadImage("greenbox.png")
  appleimg = loadImage("apple.png")
  
  
}

function setup() {
  createCanvas(1200,1000)

  snake = new Snake()

}

function draw() {
  background(0);

  if(keyDown(LEFT_ARROW)){
  snake.moveLeft()
  }

  console.log(snake.turns)
                                           
  drawSprites()
}

function keyPressed(){
  if(keyCode = LEFT_ARROW){

    if(snake.headDirection != "right"){

      snake.moveLeft()

    }
  }

  if(keyCode = RIGHT_ARROW){

    if(snake.headDirection != "left"){

      snake.moveRight()

    }
  }

  if(keyCode = UP_ARROW){

    if(snake.headDirection != "down"){

      snake.moveUp()

    }
  }

  if(keyCode = DOWN_ARROW){

    if(snake.headDirection != "up"){

      snake.moveDown()

    }
  }
}
