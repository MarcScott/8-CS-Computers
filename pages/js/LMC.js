
var PC = 0;
var memAdd = 0;
var memData = 0;
var Accu = 0;
var Input = 0;
var Output = 0;
var initialRAM = []
var ram = []

//Clear all addresses to 000
function WipeAll(){
    for(var i = 0;i<20;i++){
	for(var j = 0;j<5;j++){
	    document.getElementById('ramtable').rows[i].cells[j].children[0].value = '000';
	    console.log('test')
	}
    }
}

//Reset back to programmed state
function reset(){
    console.log('RESET CALLED');
    for(var i = 0;i<20;i++){
	for(var j = 0;j<5;j++){
	    document.getElementById('ramtable').rows[i].cells[j].children[0].value = initialRAM[(i*5)+j];
	}
    }
}

//Load the program from RAM addresses into an array
function RAMtoArray(){
    var RAMarray = []
    var RAMrows =  document.getElementById('ramtable').rows
    var columns = RAMrows[0].cells
    for(var i = 0;i<RAMrows.length;i++){
	for(var j = 0;j<columns.length;j++){
	    RAMarray.push(document.getElementById('ramtable').rows[i].cells[j].children[0].value)
	}
    }
    return RAMarray
}

function feedbacktoUser(){
    var row = Math.floor((PC)/5)
    var column = (PC)%5
    document.getElementById('ramtable').rows[row].cells[column].style.backgroundColor = 'green'
    //Locate the last address that was run by the program counter

    var previousRow = Math.floor((PC-1)/5)
    var previousColumn = (PC-1)%5
    if(PC>0){
	//reset previous address to white
	document.getElementById('ramtable').rows[previousRow].cells[previousColumn].style.backgroundColor = 'white'
    }
    //set the colour of the address being read to green
    document.getElementById('ramtable').rows[row].cells[column].style.backgroundColor = 'green'
    //provide information to the DOM
    document.getElementById("PC").innerHTML = PC;
    document.getElementById("memAdd").innerHTML = memAdd;
    document.getElementById("memData").innerHTML = memData;
    document.getElementById("Accu").innerHTML = Accu;
}
    

//Run the program
function run(){
    ram = RAMtoArray()
    //duplicate program to enable reset
    initialRAM = ram.slice(0);
    //setInterval loop to be able to view program functioning
    var programLoop = setInterval(function(){
	feedbacktoUser()
	//Feed the instructions to the appropriate function
	var instruction = ram[PC]
	setTimeout(function(){
	if(instruction == null || instruction == undefined || instruction[0] == '0'){
	    clearInterval(programLoop);
	}
	else if(instruction[0] =='1'){
	    add(+instruction.slice(1,3))
	}
	else if(instruction[0] == '2'){
	    subtract(+instruction.slice(1,3))
	}
	else if(instruction[0] == '3'){
	    store(+instruction.slice(1,3))
	}
	else if(instruction[0] == '5'){
	    load(+instruction.slice(1,3))
	}
	else if(instruction[0] == '6'){
	    PC = (+instruction.slice(1,3))
	}
	else if(instruction[0] == '7'){
	    branchZero(+instruction.slice(1,3))
	}
	else if(instruction[0] == '8'){
	    branchGreater(+instruction.slice(1,3))
	}
	else if(instruction[0] == '9'){
	    InOut(+instruction.slice(1,3))
	}
	else if(PC > 99){
	    clearInterval()
	}
	else{
	    window.alert('Error processing instruction at '+PC)
	    clearInterval()
	}
	PC++
	for(var i = 0;i<20;i++){
	    for(var j = 0;j<5;j++){
		document.getElementById('ramtable').rows[i].cells[j].children[0].value = ram[i*5+j];
	    }
	}
	},10);


    }, 1000);
    PC = 0
}
//Functions for each instruction type
function add(address){
    memAdd = address
    memData = memData + ram[address]
    console.log(memData)
}

function subtract(address){
    memAdd = address
    memData = memData - ram[address]
    console.log(memData)
}

function store(address){

    memAdd = address
    ram[address] = memData
    console.log(memData)
}

function load(address){
    memAdd = address
    memData = ram[address]
    console.log(memData)
}

function branchZero(address){
    memAdd = address
    if(memData == 0){
	PC = memAdd
    }
    console.log(memData)
}
function branchGreater(address){
    memAdd = address
    if(memData > 0){
	PC = memAdd
    }
    console.log(address)
}

function InOut(address){

    if(address == 1){
	memData = parseInt(window.prompt('Requires input'),10)
    }
    if(address == 2){
	window.alert(memData)
    }
    console.log(address)
}

//Onload, fill the ramtable with 000
window.onload = function(){
    for(var i = 0;i<20;i++){
	for(var j = 0;j<5;j++){
	    document.getElementById('ramtable').rows[i].cells[j].children[0].value = '000'
	    initialRAM.push('000')
	}
    }
}
