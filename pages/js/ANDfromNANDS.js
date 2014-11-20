var A = false;
var B = false;
var Q = true;

function setup(){
    createCanvas(300, 100);  
    frameRate(12);
    live = color(255,0,0)
    neutral = color(100,100,100)
    btnA = createButton('A')
    btnA.position(25,25)
    btnB = createButton('B')
    btnB.position(25,50)
    btnQ = createButton('Q')
    btnQ.position(275,40)
    btnA.mousePressed(switchA)
    btnB.mousePressed(switchB)
}

//wire class (xy start, XY end, On is true or false)
function wire(x,y,X,Y,On){
    this.x = x;
    this.y = y;
    this.X = X;
    this.Y = Y;
    this.On = On;
}

//wire display
wire.prototype.display = function(){
    if(this.On == true){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(this.x,this.y,this.X,this.Y)
    
}

//NAND gate class (x and y postion - A,B are inputs false or true)
function NAND(x,y,A,B){
    this.x = x;
    this.y = y;
    this.A = A;
    this.B = B;
}

//NAND display
NAND.prototype.display = function(){
    push()
    strokeWeight(6)
    scale(0.5,0.5)
    translate(this.x-100,this.y-100)
    stroke(neutral)
    line(50,50,100,50)
    line(50,150,100,150)
    line(50,50,50,150)
    noFill()
    arc(100,100,100,100, PI+HALF_PI,HALF_PI);
    ellipse(157,100,14,14)
    if(this.A == true){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(0,75,50,75)
    if(this.B == true){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(0,125,50,125)
    Q = !(this.A&&this.B)
    if(Q == true){
	stroke(live)
    }
    else{
	stroke(neutral)
    }
    line(164,100,200,100)
    stroke(neutral)
    pop()
    return Q
}

function switchA(){
    A = !A
}

function switchB(){
    B = !B
}
 
function draw(){
    strokeWeight(3)
    x = new NAND(200,100,A,B).display()
    new wire(150,50,175,38,x).display()
    new wire(150,50,175,62,x).display()
    y = new NAND(450,100,x,x).display()
    stroke(100,100,100)
    strokeWeight(1)
//    Q = y ? 1 : 0;
}








