var A = false;
var Q = true;

function setup(){
    createCanvas(200,100);  
    frameRate(12);
    live = color(255,0,0)
    neutral = color(100,100,100)
    btnA = createButton('A')
    btnA.position(25,39)
    btnQ = createButton('Q')
    btnQ.position(150,39)
    btnA.mousePressed(switchA)
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

//functions to switch value of A on button pushes
function switchA(){
    A = !A
}



//draw it all with some buttons
function draw(){
    background(255)
    //draw a NAND
    Q = new NOT(200,100,A).display()
    //and add some buttons


}
