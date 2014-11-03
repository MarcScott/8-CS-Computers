
var PC = 0;
var memAdd = 0;
var memData = 0;
var Accu = 0;
var Input = 0;
var Output = 0;
var initialRAM = []
var ram = []


function WipeAll(){
    for(var i = 0;i<20;i++){
	for(var j = 0;j<5;j++){
	    document.getElementById('ramtable').rows[i].cells[j].children[0].value = '000';
	    console.log('test')
	}
    }
}

function reset(){
    console.log('RESET CALLED');
    for(var i = 0;i<20;i++){
	for(var j = 0;j<5;j++){
	    document.getElementById('ramtable').rows[i].cells[j].children[0].value = initialRAM[(i*5)+j];
	}
    }
}

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


function run(){
    ram = RAMtoArray()
    initialRAM = ram.slice(0);
    
    var programLoop = setInterval(function(){
	var row = Math.floor(PC/5)
	var column = PC%5
	var previousRow = Math.floor((PC-1)/5)
	var previousColumn = (PC-1)%5
	if(PC>0){
	    console.log('PREVIOUS ROW ='+previousRow)
	    console.log('PREVIOUS COLUMN ='+previousColumn)
	    document.getElementById('ramtable').rows[previousRow].cells[previousColumn].style.backgroundColor = 'white'
	    console.log('SET TO WHITE')
	}
	document.getElementById('ramtable').rows[row].cells[column].style.backgroundColor = 'green'
	
	var instruction = ram[PC]
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


    }, 1000);
    
    PC = 0
}
/*
function run(){
    ram = RAMtoArray()
    initialRAM = ram.slice(0);
    var HALT = false;
    while(HALT == false){
	document.getElementById('ramtable').rows[Math.floor(PC/5)].cells[PC-Math.floor(PC/5)].style.backgroundColor = 'green'
	var instruction = ram[PC]
	if(instruction == null || instruction == undefined || instruction[0] == '0'){
	    HALT = true;
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
	    HALT = true;
	}
	else{
	    window.alert('Error processing instruction at '+PC)
	    HALT = true;
	}
	PC++
	for(var i = 0;i<20;i++){
	    for(var j = 0;j<5;j++){
		document.getElementById('ramtable').rows[i].cells[j].children[0].value = ram[i*5+j];
	    }
	}

    }
    PC = 0
}
*/

function add(address){
    memAdd = address
    memData = memData + ram[address]
    console.log(memData)
}

function subtract(address){
    memAdd = address
    memData = memData - ram[address]
    console.log(memData)
    console.log('Hello')
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

window.onload = function(){
    for(var i = 0;i<20;i++){
	for(var j = 0;j<5;j++){
	    document.getElementById('ramtable').rows[i].cells[j].children[0].value = '000'
	    initialRAM.push('000')
	}
    }
}
