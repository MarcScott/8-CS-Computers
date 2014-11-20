var fillTop = false;
var fillMiddle = false;
var fillLower = false;

var topA =100;
var btmA = 0;

function setup(){
    createCanvas(800,800);  
    frameRate(30);
    live = color(255,0,0)
    neutral = color(100,100,100)
    blue = color(0,0,255)
    btnA = createButton('Tap1')
    btnA.position(25,27)
    btnA.mousePressed(switchTop)
}

function switchTop(){
    fillTop = !fillTop
}

function topWater(){
    stroke(blue)
    fill(blue)
    rect(100,topA,100,btmA)
}

function draw(){
    background(255)
    if(fillTop == true && ){
	btmA++
	topWater()
    }
    else if(fillTop == false){
	topA++
	btmA--
	topWater()
    }
    console.log(fillTop)
    
	
    
}
