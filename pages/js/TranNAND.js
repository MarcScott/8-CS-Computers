var In = 0;
var A = 0;
var B = 0;



function setup(){
    createCanvas(300, 320);  
    frameRate(30);
    live = color(255, 100,20 )
    neutral = color(100,100,100)
    buttonPower = createButton('Power');
    buttonPower.position(150,80)
    buttonPower.mousePressed(flipIn)
    text(In,170,120)
    buttonA = createButton('A');
    buttonA.position(200, 80);
    buttonA.mousePressed(flipA)
    text(A,210,120)
    buttonB = createButton('B');
    buttonB.position(225, 80);
    buttonB.mousePressed(flipB)
    text(B,235,120)
}

function trans(x,y,C,B){
    var size = 100;
    noFill()
    stroke(neutral)
    strokeWeight(size/30)
    ellipse(x,y,size,size)
    fill(neutral)
    rect(x-size/4,y-size/3,size/7,size/1.5)
    //Collector
    if(C == 0){
	stroke(neutral)
    }
    else{
	stroke(live)
    }
    line(x-size/4+size/7,y-size/6,x+size/2.7,y-size/3)
    //Emitter
    if(C == 1 && B ==1){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(x-size/4+size/7,y+size/6,x+size/2.7,y+size/3)
    triangle(x+size/5,y+size/3.7,x+size/8,y+size/5,x+size/9,y+size/3.5)
    //Base
    if (B==1){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(x-size/2,y,x-size/4,y)
}

function NAND(){
    textSize(30)
    //Draw the transistors
    if(In === 1 && A === 1){
	trans(200,200,1,1)
    }
    else if(In === 1){
	trans(200,200,1,0)
    }
    else{
	trans(200,200,0,0)
    }

    if(In === 1 && A === 1 && B === 1){
	trans(200,400,1,1)
    }
    else if(In === 1 && A === 1){
	trans(200,400,1,0)
    }
    else{
	trans(200,400,0,0)
    }
    fill(neutral)
    //Bridge
    if(In === 1 && A === 1){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(238,233,238,365)
    //A
    if(A===1){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(40,200,150,200)
    text('A',10,210)
    //B
    if(B===1){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(40,400,150,400)
    text('B',10,410)
    //Earth
    if (In === 1 && A === 1 && B === 1){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(238,433,238,600)
    for(var i = 0;i<3;i++){
	line(225+5*i,600+5*i,251-5*i,600+5*i)
    }
    //Live
    if(In === 1){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(238,0,238,165)
    text('+',250,30)
    //Out
    if(In === 1 && A === 1 && B === 1){
	stroke(neutral)
    }
    else if(In === 0){
	stroke(neutral)
    }
    else{
	stroke(live)
    }
    line(238,100,350,100)
    triangle(300,90,300,110,330,100)
    text('OUT',360,110)
}

function flipIn(){
    In = 1 - In
}

function flipA(){
    A = 1 - A
}

function flipB(){
    B = 1 - B
}
function draw(){
    background(255)
    push()
    scale(0.5)
    NAND()
    pop()


}








