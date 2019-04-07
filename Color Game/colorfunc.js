var mode = 6;
var colors = [];
var pickedColor;
	
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".modeBtn");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
 }

//mode button event listeners
 function setUpModeButtons(){
	for ( var i=0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				mode = 3;
			} else {
				mode = 6;
			}
			reset();
		});
	}
 }

//add event on click - squares
 function setUpSquares(){
 	for (var i=0; i<squares.length; i++){
		
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			} else{
				this.style.removeProperty('background-color');
				this.classList.add("wrongSquare");
				messageDisplay.textContent = "Try again!";
			}
		});
	}
 }

function reset(){
	messageDisplay.textContent = "";
	this.textContent = "New Colors"
	colors = generateRandomColors(mode);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++){
		//give color to squares
		if(colors[i]){
			squares[i].style.removeProperty("display");
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "#660000";
}

resetButton.addEventListener("click", function(){
	reset();
});

//All squares same color
function changeColors(color){
	for (var i=0; i<squares.length; i++){
		//give color to squares
		squares[i].style.backgroundColor = color;
	}
}

//Picks which will be the right color
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Random colors for the squares
function generateRandomColors (num) {
	var arr = [];
	for ( var i =0; i< num; i++){
		arr.push(randomColor());
	}

	return arr;
}

//Generate Random Color
function randomColor() {
	//pick random red
	var r = Math.floor(Math.random() *256);
	//pick random greeen
	var g = Math.floor(Math.random() *256);
	//pick random blue
	var b = Math.floor(Math.random() *256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
