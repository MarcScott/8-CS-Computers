var A = 0;
var B = 0;
var Q = 1;

var buttonA,buttonB,buttonQ;


function setup(){
    createCanvas(200,200);  
    frameRate(12);
    live = color(255,0,0)
    neutral = color(100,100,100)
    buttonA=createButton('A')
    buttonA.position(50,160)
    buttonA.mousePressed(switchA)
    text(A,60,200)
    buttonB=createButton('B')
    buttonB.position(80,160)
    buttonB.mousePressed(switchB)
    text(B,90,200)
    buttonQ=createButton('Q')
    buttonQ.position(110,160)
    text(Q,120,200)
}

function draw(){
    background(255)
    var Q = NAND(100,100,A,B)
}

function NAND(x,y,A,B){
    push()
    textSize(20)
    strokeWeight(2)
    stroke(neutral)
    text('A',55,82)
    text('B',55,132)
    text('Q',124,107)
    translate(x-100,y-100)
    var Q = 1;
    strokeWeight(3)
    line(50,50,100,50)
    line(50,150,100,150)
    line(50,50,50,150)
    noFill()
    arc(100,100,100,100, PI+HALF_PI,HALF_PI);
    ellipse(157,100,14,14)
    //A
    if(A==1){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(0,75,50,75)
    //B
    if(B==1){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(0,125,50,125)
    //Q
    if(A==1 && B == 1){
	Q = 0;
	stroke(neutral)
    }
    else{
	stroke(live)
    }
    line(164,100,214,100)
    pop()
    return Q
}

function switchA(){
    A = 1-A
}

function switchB(){
    B = 1-B
}










