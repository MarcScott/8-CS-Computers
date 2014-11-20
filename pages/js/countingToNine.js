var x = 0;
var y = 0;
var reset = false;

function setup(){
    createCanvas(600, 100);
    frameRate(30)
}

function draw(){
    if(reset === true){
	x = 0;
	reset = false;
    }
    if(x===100){
	x = 0
    }
    background(255)
    stroke(255)
    fill(255)
    rect(0,0,600,100)
    stroke(0)
    textAlign(RIGHT)
    textFont('monospace')
    textSize(32);
    fill(0, 102, 153);
    if(x%10===0){
	text(y, 400,60);
	y = x/10
    }
    else{
	text(y, 400, 60);
    }
    x++
}

function mouseClicked(){
    reset = true;
}
