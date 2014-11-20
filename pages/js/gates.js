var A = false;
var B = false;

function setup(){
    createCanvas(1000,1000);  
    frameRate(12);
    live = color(255,0,0)
    neutral = color(100,100,100)
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
    image(img,30,40)
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
    image(img,26,39,150,120)
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


//functions to switch value of A on button pushes
function switchA(){
    A = !A
}

function switchB(){
    B = !B
}

//draw it all with some buttons
function draw(){
    background(255)
    //draw a NAND
    XOR_1 = new XOR(300,100,A,B)
    AND_1 = new AND(300,200,A,B)
    Q = new NAND(200,100,A,B).display()
    //and add some buttons
    btnA = createButton(A ? 1:0)
    btnA.position(25,27)
    btnB = createButton(B ? 1:0)
    btnB.position(25,52)
    btnQ = createButton(Q ? 1:0)
    btnQ.position(150,39)
    btnA.mousePressed(switchA)
    btnB.mousePressed(switchB)
}
