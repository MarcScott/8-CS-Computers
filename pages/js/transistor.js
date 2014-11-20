var In = 0;
var A = 0;
var B = 0;



function setup(){
    createCanvas(120, 120);  
    frameRate(12);
    live = color(255, 100,20 )
    neutral = color(100,100,100)
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
    stroke(neutral)
    textSize(15)
    strokeWeight(2)
    text('B',20,55)
    text('C',90,45)
    text('E',90,85)
}

function draw(){
    background(255)
    push()
    scale(1)
    trans(60,60,0,0)
    pop()
}








