//Declare an object array to hold the cards
var pack = [];
var packCoords=[];
var binary = [1,1,1,1,1]

function setup(){
    frameRate(12)
    createCanvas(350, 250);
    // Create the cards in the pack
    for (var i = 0;i<5;i++){
	pack.push(new Card(i));
    }
}

// Draw the contents of the pack of cards
function draw(){
    background(255);
    for (var i = 0; i<5; i++){
	pack[i].display()
    }
    textSize(32)
    fill(100)
    for (var i = 0; i<binary.length;i++){
	text(binary[i],300 - i * 70,240)
    }
}

//Setup the card class
function Card(i){
    this.x = 280 - i * 70;
    this.y = 0;
    this.width = 60;
    this.height = 200;
    this.spots = Math.pow(2,i)
    this.reveal = true;
}

//Set the display state of the card depending on spots
Card.prototype.display = function(){
    var sep = 20;
    if(this.reveal == true){
	fill(140,140,140)
    }
    else{
	fill(80)
    }
    rect(this.x,this.y,this.width,this.height);
    //Conditional to handle the single spotted card
    fill(230,230,230)
    if (this.reveal == true){
	if(this.spots === 1){
	    ellipse(this.x + this.width/2, this.y + this.height/2,10,10)
	}
	//
	else{
	    start = this.height / 2 - ((this.spots/2 -0.5)*10)
	    for(var i = 0; i<this.spots/2; i++){
		ellipse(this.x + 20,start,10,10);
		ellipse(this.x + this.width-20,start,10,10);
		start += 20
	    }
	}
    }
}

//It's too late for me to implement this properly. This will do for now
function mouseClicked(){
    if(mouseX > 0 && mouseX < 60 && mouseY > 0 && mouseY <200){
	pack[4].reveal = !pack[4].reveal
	binary[4] = 1 -binary[4]
    }
    else if(mouseX > 70 && mouseX < 130 && mouseY > 0 && mouseY <200){
	pack[3].reveal = !pack[3].reveal
	binary[3] = 1 -binary[3]
    }
    else if(mouseX > 140 && mouseX < 200 && mouseY > 0 && mouseY <200){
	pack[2].reveal = !pack[2].reveal
	binary[2] = 1 -binary[2]
    }
    else if(mouseX > 210 && mouseX < 270 && mouseY > 0 && mouseY <200){
	pack[1].reveal = !pack[1].reveal
	binary[1] = 1 -binary[1]
    }
    else if(mouseX > 280 && mouseX < 340 && mouseY > 0 && mouseY <200){
	pack[0].reveal = !pack[0].reveal
	binary[0] = 1 -binary[0]
    }
}


