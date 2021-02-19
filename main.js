canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var rover_height = 90
var rover_width = 100

var background = "mars.jpg"
var rover = "rover.png"
var rover_X = 10
var rover_Y = 10
function add(){

     backgroundImg = new Image()
backgroundImg.onload = uploadBackground;
backgroundImg.src = background

     roverImg = new Image()
roverImg.onload = uploadrover;
roverImg.src = rover
}
function uploadBackground(){
    ctx.drawImage(backgroundImg,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(roverImg,rover_X,rover_Y,rover_width,rover_height)
}
window.addEventListener("keydown",myKeydown)
function myKeydown(e){
var keydown = e.keyCode
    if(keydown = 38){
    up()
    console.log("up")
    }
    if(keydown = 40){
    down()
    console.log("down")
    }
    if(keydown = 37){
    left()
    console.log("left")
    }
    if(keydown = 39){
    right()
    console.log("right")
    }}