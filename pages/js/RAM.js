var addressIn;
var submitAddress;
var dataIn;
var submitData;
var bitLineToWrite;
var wordLineToWrite;
var wipeData;


function setup(){
    createCanvas(600,500);  
    frameRate(60);
    live = color(255,0,0)
    neutral = color(150,150,150)
    //Create RAM and fill it with Cells
    Cells = []
    CAS = []
    RAS = []

    //Populate arrays with cells and lines.
    for(var i = 0;i<16;i++){
	Cells.push([])
	CAS.push(new bitLine(i * 30 + 50,false))
	for(var j = 0; j<12;j++){
	    Cells[i].push(new memCell(i * 30 + 50, j * 30 + 50, false))
	}
    }
    for(var i = 0; i<12;i++){
	RAS.push(new wordLine(i * 30 + 50, false))
    }

    //Set up the input for address
    addressIn = createInput();
    addressIn.position(50, 430);

    submitAddress = createButton('submit');
    submitAddress.position(190, 430);
    submitAddress.mousePressed(getAddress);
    //Set up the input for data
    dataIn = createInput();
    dataIn.position(250, 430);
    submitData = createButton('submit');
    submitData.position(390, 430);
    submitData.mousePressed(powerUp);
    //button to clear arrays
    wipeData = createButton('Wipe');
    wipeData.position(450, 430);
    wipeData.mousePressed(wipe);
}
//memory cell object
function memCell(x,y,state){
    this.x = x;
    this.y = y;
    this.state = state;
}
//memory cell display method
memCell.prototype.display = function(){
    fill(this.state ? live:neutral)
    ellipse(this.x,this.y,10,10)
}

//bit line object
function bitLine(x,state){
    this.x = x;
    this.state = state;
}

bitLine.prototype.display = function(){
    strokeWeight(3)
    stroke(this.state ? live:neutral)
    line(this.x,10,this.x,12*30+50)
}

//word line object
function wordLine(y,state){
    this.y = y;
    this.state = state;
}

wordLine.prototype.display = function(){
    strokeWeight(3)
    stroke(this.state ? live:neutral);
    line(10,this.y,540,this.y);
}

//Convert the binary address to a column and row
function findAddress(address){
    var digit = parseInt(address, 2);
    var column = digit%2 * 8
    var row  = Math.floor(digit/2)
    return [row,column]
}

//power up the bitLines and wordLines
function powerUp(){
    //wipe the RAM rows and columns
    for(var i = 0; i<CAS.length;i++){
	CAS[i].state = false;
    }
    for (var i = 0;i<RAS.length;i++){
	RAS[i].state = false;
    }
    //burn the bits
    RAS[wordLineToWrite].state = true;
    for(var i = 0; i < dataIn.value().length;i++){
	bit = bitLineToWrite + i;
	CAS[bit].state = !!+dataIn.value()[i]
	Cells[bit][wordLineToWrite].state = !!+dataIn.value()[i]
    }
}

//wipe the bits when wipe button pushed
function wipe(){
    for(var i = 0;i<Cells.length;i++){
	for(var j = 0;j<Cells[i].length;j++){
	    Cells[i][j].state = false;
	}
    }
     //wipe the RAM rows and columns
    for(var i = 0; i<CAS.length;i++){
	CAS[i].state = false;
    }
    for (var i = 0;i<RAS.length;i++){
	RAS[i].state = false;
    }
}

//Run when submit button is pushed for address
function getAddress(){
    binaryAddress = addressIn.value();
    address = findAddress(binaryAddress)
    wordLineToWrite = address[0]
    bitLineToWrite = address[1]
    //powerUp('01000010',wordLineToWrite,bitLineToWrite)
}

function draw(){
    background(255);
    textSize(20);
    fill(20,20,20)
    text('CAS',550,30)
    push()
    rotate(HALF_PI)
    translate(420,-15)
    text('RAS',0,0)
    pop()
    text('Address',80,430);
    text('Data',280,430);    
     //draw the CAS
    for(var i = 0; i<CAS.length; i++){
	CAS[i].display()
    }
    //draw the RAS
    for(var i = 0; i<RAS.length; i++){
	RAS[i].display()
    }
    //draw the cells
    for(var i = 0; i < Cells.length; i++){
	for(var j = 0; j<Cells[i].length; j++){
	    Cells[i][j].display()
	}
    }
     


    //CAS BAR
    noStroke()
    fill(70,70,170)
    rect(40,5,500,30)

    //RAS BAR
    rect(5,40,30,370)

    //labels
    textAlign(CENTER)
    textSize(15)
    fill(255,255,255)
    for(var i = 0;i<16;i++){
	if(bitLineToWrite === i){
	    fill(40,200,40)
	}
	text(i+1,i*30+50,30)
	fill(255,255,255)
    }
    for(var i = 0;i<12;i++){
	if(wordLineToWrite === i){
	    fill(40,200,40)
	}
	text(i+1,25,i*30+55)
	fill(255,255,255)
    }
    stroke(0,0,0)
}
