var fillTop = false;
var fillMiddle = false;
var fillLower = false;

var heightA =0;
var heightB =0;
var heightC =0;

function setup(){
    createCanvas(800,800);  
    frameRate(30);
    live = color(255,0,0)
    neutral = color(100,100,100)
    blue = color(0,0,255)
    btnA = createButton('Tap1')
    btnA.position(25,27)
    btnA.mousePressed(switchTop)
    btnA = createButton('Tap2')
    btnA.position(50,27)
    btnA.mousePressed(switchMiddle)
    btnA = createButton('Tap3')
    btnA.position(75,27)
    btnA.mousePressed(switchLower)
}

function switchTop(){
    fillTop = !fillTop
}

function switchMiddle(){
    fillMiddle = !fillMiddle
}

function switchLower(){
    fillLower = !fillLower
}

function topWater(heightA){
    stroke(blue)
    fill(blue)
    rect(100,100,100,heightA)
}
function middleWater(heightB){
    stroke(blue)
    fill(blue)
    rect(100,300,100,heightB)
}
function lowerWater(heightC){
    stroke(blue)
    fill(blue)
    rect(100,500,100,heightC)
}



function draw(){
    background(255)
    if(fillTop == true && heightA !=200){
	heightA++
	topWater(heightA)
    }
    else if(fillTop == false && heightA !=0){
	heightA--
	topWater(heightA)
    }
    else{
	topWater(heightA)
    }
    if(heightA == 200 && fillMiddle == true && heightB !=200){
	heightB++
	middleWater(heightB)
    }
    else if(heightA ==200 && fillMiddle == false && heightB != 0){
	heightB--
	middleWater(heightB)
    }
    else{
	middleWater(heightB)
    }

    if(heightB == 200 && fillLower == true && heightC !=200){
	heightC++
	lowerWater(heightC)
    }
    else if (heightB ==200 && fillLower == false && heightC !=0){
	heightC--
	lowerWater(heightC)
    }
    text(heightA,100,100)
    text(fillMiddle,200,100)
    console.log(heightB)
    

}
