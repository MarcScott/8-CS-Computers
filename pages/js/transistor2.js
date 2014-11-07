var In = 0;
var A = 0;
var B = 0;



function setup(){
    createCanvas(200, 200);  
    frameRate(30);
    live = color(255, 100,20 )
    neutral = color(100,100,100)
        btnA = createButton('Power')
    btnB = createButton('Base')
    btnA.position(0,150)
    btnB.position(80,150)
    btnA.mousePressed(switchPower)
    btnB.mousePressed(switchBase)
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
    line(x+size/2.7,0,x+size/2.7,y-size/3)
    line(x-size/4+size/7,y-size/6,x+size/2.7,y-size/3)
    //Emitter
    if(C == 1 && B ==1){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(x+size/2.7,y+size/3,x+size/2.7,120)
    line(x-size/4+size/7,y+size/6,x+size/2.7,y+size/3)
    triangle(x+size/5,y+size/3.7,x+size/8,y+size/5,x+size/9,y+size/3.5)
    //Base
    if (B==1){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(0,y,x-size/4,y)
    stroke(neutral)
    textSize(15)
    strokeWeight(2)
    text('B',20,55)
    text('C',90,45)
    text('E',90,85)
}

function switchPower(){
    A = 1 - A
}
function switchBase(){
    B = 1 -B
}

function draw(){
    background(255)
    push()
    scale(1)
    trans(60,60,A,B)
    pop()

}








