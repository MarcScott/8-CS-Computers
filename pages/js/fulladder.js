var A = false;
var B = false;
var C = false;
var D = true;

function setup(){
    createCanvas(500,230);  
    frameRate(12);
    live = color(255,0,0);
    neutral = color(100,100,100);
    XORimg = loadImage("XOR.jpg");
    ORimg = loadImage("OR.png");
    btnA = createButton('A')
    btnA.position(25,27)
    btnB = createButton('B')
    btnB.position(25,52)
    btnC = createButton('C')
    btnC.position(25,77)
    btnQ = createButton("Q")
    btnQ.position(400,65)
    btnCarry = createButton('Carry')
    btnCarry.position(400,177)
    btnA.mousePressed(switchA)
    btnB.mousePressed(switchB)
    btnC.mousePressed(switchC)
}

function AND(x,y,A,B){
    this.x = x;
    this.y = y;
    this.A = A;
    this.B = B;
}

AND.prototype.display = function(){
    //Move to x and y
    push()
    strokeWeight(6)
    scale(0.5,0.5)
    translate(this.x-100,this.y-100)
    //Draw the AND gate
    stroke(neutral)
    line(50,50,100,50)
    line(50,150,100,150)
    line(50,50,50,150)
    noFill()
    arc(100,100,100,100, PI+HALF_PI,HALF_PI);
    // Inputs and Outputs colors set depending on A or B
    stroke(this.A ? live : neutral)
    line(0,75,50,75)
    stroke(this.B ? live : neutral)
    line(0,125,50,125)
    stroke(this.B&&this.A ? live : neutral)
    line(150,100,200,100)
    pop()
    return this.B&&this.A
}

function NAND(x,y,A,B){
    this.x = x;
    this.y = y;
    this.A = A;
    this.B = B;
}

NAND.prototype.display = function(){
    //Move to x and y
    push()
    strokeWeight(6)
    scale(0.5,0.5)
    translate(this.x-100,this.y-100)
    //Draw the AND gate
    stroke(neutral)
    line(50,50,100,50)
    line(50,150,100,150)
    line(50,50,50,150)
    noFill()
    arc(100,100,100,100, PI+HALF_PI,HALF_PI);
    ellipse(160,100,20,20)
    // Inputs and Outputs colors set depending on A or B
    stroke(this.A ? live : neutral)
    line(0,75,50,75)
    stroke(this.B ? live : neutral)
    line(0,125,50,125)
    stroke(!(this.B&&this.A) ? live : neutral)
    line(170,100,200,100)
    pop()
    return !(this.B&&this.A)
}

function NOT(x,y,A){
    this.x = x;
    this.y = y;
    this.A = A;
}

NOT.prototype.display = function(){
    //Move to x and y
    push()
    strokeWeight(6)
    scale(0.5,0.5)
    translate(this.x-100,this.y-100)
    stroke(neutral)
    //Draw OR gate using a tinted image
    triangle(50,50,50,150,125,100)
    ellipse(135,100,20,20);
    stroke(this.A ? live : neutral)
    line(0,100,50,100)
    // Inputs and Outputs colors set depending on A
    stroke(!this.A ? live : neutral)
    line(150,100,190,100)
    pop()
    return !this.A
}

function OR(x,y,A,B){
    this.x = x;
    this.y = y;
    this.A = A;
    this.B = B;
}

OR.prototype.display = function(){
    //Move to x and y
    push()
    strokeWeight(6)
    scale(0.5,0.5)
    translate(this.x-100,this.y-100)
    stroke(neutral)
    //Draw OR gate using a tinted image
    tint(255,150)
    image(ORimg,30,40)
    //ellipse(160,100,20,20);
    // Inputs and Outputs colors set depending on A or B
    stroke(this.A ? live : neutral)
    line(0,75,50,75)
    stroke(this.B ? live : neutral)
    line(0,125,50,125)
    stroke(this.A||this.B ? live : neutral)
    line(165,100,200,100)
    pop()
    return this.B||this.A
}

function NOR(x,y,A,B){
    this.x = x;
    this.y = y;
    this.A = A;
    this.B = B;
}

NOR.prototype.display = function(){
    //Move to x and y
    push()
    strokeWeight(6)
    scale(0.5,0.5)
    translate(this.x-100,this.y-100)
    stroke(neutral)
    //Draw OR gate using a tinted image
    tint(255,150)
    image(img,30,40)
    ellipse(165,100,20,20);
    // Inputs and Outputs colors set depending on A or B
    stroke(this.A ? live : neutral)
    line(0,75,50,75)
    stroke(this.B ? live : neutral)
    line(0,125,50,125)
    stroke(!(this.A||this.B) ? live : neutral)
    line(175,100,200,100)
    pop()
    return !(this.B||this.A)
}


function XOR(x,y,A,B){
    this.x = x;
    this.y = y;
    this.A = A;
    this.B = B;
}

XOR.prototype.display = function(){
    //Move to x and y
    push()
    strokeWeight(6)
    scale(0.5,0.5)
    translate(this.x-100,this.y-100)
    stroke(neutral)
    //Draw OR gate using a tinted image
    tint(255,150)
    image(XORimg,26,39,150,120)
    //ellipse(165,100,20,20);
    // Inputs and Outputs colors set depending on A or B
    stroke(this.A ? live : neutral)
    line(0,75,62,75)
    stroke(this.B ? live : neutral)
    line(0,125,62,125)
    stroke((this.B||this.A)&&!(this.B&&this.A) ? live : neutral)
    line(175,100,200,100)
    pop()
    return (this.B||this.A)&&!(this.B&&this.A)
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
    strokeWeight(3)
    stroke(this.On ? live : neutral)
    line(this.x,this.y,this.X,this.Y)
}



//functions to switch value of A on button pushes
function switchA(){
    A = !A
}

function switchB(){
    B = !B
}

function switchC(){
    C = !C
}

//draw it all with some buttons
function draw(){
    
    background(255)
    //draw a NAND
    new wire(50,37.5,100,37.5,A).display()
    new wire(50,62.5,100,62.5,B).display()
    new wire(50,87.5,200,87.5,C).display()
    XOR1 = new XOR(300,100,A,B).display()
    XOR2 = new XOR(300,250,A,B).display()
    AND1 = new AND(300,400,A,B).display()
    XOR3 = new XOR(500,150,XOR1,C).display()
    AND2 = new AND(500,300,XOR2,C).display()
    OR1 = new OR(700,375,AND2,AND1).display()
    new wire(200,50,200,60,XOR1).display()
    new wire(100,37.5,100,187.5,A).display()
    new wire(80,62.5,80,212.5,B).display()
    new wire(80,212.5,100,212.5,B).display()
    new wire(80,137.5,100,137.5,B).display()
    new wire(60,87.5,60,162.5,C).display()
    new wire(60,162.5,200,162.5,C).display()
    new wire(200,126,200,137,XOR2).display()
    new wire(300,150,300,175,AND2).display()
    new wire(200,200,300,200,AND1).display()
    new wire(300,75,400,75,XOR3).display()

    stroke(neutral)
    ellipse(100,37.5,5,5)
    ellipse(100,112.5,5,5)
    ellipse(80,137.5,5,5)
    ellipse(80,62.5,5,5)
    ellipse(60,87.5,5,5)
    //and add some buttons

    strokeWeight(1)
    fill(neutral)
    textSize(12)
    text(A ? 1:0,10,27+12)
    text(B ? 1:0,10,52+18)
    text(C ? 1:0,10,77+18)
    text(XOR3 ? 1:0,440,65+12)
    text(OR1 ? 1:0,470,177+12)
}
