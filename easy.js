let easyButton = document.querySelector("#easy-button")

easyButton.addEventListener("click", (evt) => {
    // setup()
    // draw()

})
var hope;
var hopeImg = new Image();

function preload() {
  hopeImg = loadImage('https://i.imgur.com/DZxCqpb.png');
   
}

//FUNCTION TO CREATE SPRITES
function setup() {
  createCanvas(915, 640);
  hope = createSprite(width/2, height/6);
  hope.addImage(hopeImg);
  hope.rotation -= 2  //(makes them spin if we want)
  hope.onMousePressed = removeAndScore
}
// DRAW FUNCTION -- SETS VELOCITY
function draw() {
  background(50);
  if (hope.position.y >= height) {
    hope.velocity.y = -1;
    // set to height to prevent "tunneling"
    hope.position.y = width;
  }
  // constant downward speed
  // (i.e., gravity)
  hope.addSpeed(0.1, 90);
  drawSprites();
}

//FUNCTION CALLED ON MOUSEPRESS
function removeAndScore() {
  score += 1;
  this.remove();
}















//User must first click on a level to start the game 
// easyButton = document.querySelector("#easy-button")


// easyButton.addEventListener("click", (evt) => {
//     console.log(evt.target)
//     drawEmojis()
// })


// let ctx = canvas.getContext('2d')
// function drawBackground(){
//     ctx.fillStyle = 'rgb(74, 161, 81)'
//     ctx.fillRect(0, 0, 915, 640)
// }

// var hope = document.createElement("img")
//     hope.src = "images/hope_emoji.jpg"
// var nabeel = new Image()
//     nabeel.src = "images/nabeel_emoji.JPG"

// let hopeX= 0
// let hopeY = 0

// let nabeelX = 50
// let nabeelY = 50 

// var gravity = 1.5

// const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
//                             window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

// let hopeDiv = document.createElement("div")
// hopeDiv.append(hope)
// canvas.append(hopeDiv)
// console.log(hopeDiv)

// hopeDiv.addEventListener("click", (evt) => {
//     console.log(evt.target)
// })
// // console.log(hope)
// // hope.addEventListener("click", (evt) => {
// //     console.log(evt.target)
// // })
    
// function drawHope(){
//     ctx.drawImage(hope, hopeX, hopeY)
//     hopeY += gravity
// }
// function drawNabeel(){
//     ctx.drawImage(nabeel, nabeelX, nabeelY)
//     nabeelY += gravity 
// }

// function drawEmojis(){
//     // ctx.clearRect(0, 0, canvas.width, canvas.height)
//     drawBackground()
//     drawHope()
//     drawNabeel()
//     window.requestAnimationFrame(drawEmojis)
// }
// // drawEmojis()
