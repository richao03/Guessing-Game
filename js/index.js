//generate winning number
	var winningNumber = Math.floor((Math.random()*100)+1);
	var usednum = [];
	var counter = 5
	
$(document).ready(function(){

//enter submit guess
$("#guessbar").keypress(function (e) {   				//this id must be the bar, since enter will be pressed on the bar 
    if (e.which == 13) {
  	var playersGuess = +document.getElementById('guessbar').value; //the variable playersguess is assigned to the value entered in the guess bar at the time of keypress
		document.getElementById("guessbar").value =""; 	//empties out the value
		playersGuessSubmission(playersGuess); 			//when calling the function, be sure to pass the argument to the function
	}
	
});

//click submit guess
$("#enterguess").click(function(){						//this id must be the button, since enter will be pressed on the button 
	var playersGuess = +document.getElementById('guessbar').value; //playerguess is assigned to the value in the guess bar at the time of click
		document.getElementById("guessbar").value =""; 	//empties out the value 
	playersGuessSubmission(playersGuess);   			//when calling the function, be sure to pass the argument to the function 
});


$("#restart").click(function(){
restart();
});

$("#hint").click(function(){
hint();
});


});

//**************************************//

function restart(){
   window.location.reload();
}

//**************************************//

function playersGuessSubmission(num){

															//if answer is correct
	if(num == winningNumber){                         		//if num = winningNumber return winning message
    document.body.style.backgroundImage = "url('https://dysonology.files.wordpress.com/2010/10/clint-eastwood-25-0bbw2qhfs9-1024x768.jpg')"

	var element = document.getElementById("header");
		element.innerHTML = "Ya got lucky...";
	var element1 = document.getElementById("header2");
		element1.innerHTML = "...this time!!";
    			var element1 = document.getElementById("header3");
element1.innerHTML = "";
	} else if (usednum.indexOf(num) == -1){	
	ifwrong(num)											//if num has not been used call ifwrong(num)
		} else {	
	duped()													//if num has already been used call duped()
	} 
}

//**************************************//

function ifwrong(num){	
	usednum.push(num);
		var element4 = document.getElementById("array");
		element4.innerHTML = "Numbers guessed: " + usednum;						//if num has not been used, display at #array	 							
	counter --												//if num has not been used and is wrong counter -- and return msg of how many chances are left
	if (counter > 1){								
		var element = document.getElementById("header");
element.innerHTML = ("You only have " + counter + " chances left!");
		var element1 = document.getElementById("header2");
element1.innerHTML = "";
	}
	if (counter == 1){
		var element = document.getElementById("header");
element.innerHTML = "Guess wisely, this is your last chance!";
		var element1 = document.getElementById("header2");
element1.innerHTML = "";
	} 
	if (counter === 0) { 
    
   document.body.style.backgroundImage = "url('http://wallpaper.zone/img/2220158.png')"
		var element = document.getElementById("header");  	//when counter reaches 0
element.innerHTML = "Game over, the answer was " + winningNumber + "<br>" +"Please start over";
		var element1 = document.getElementById("header2");
element1.innerHTML = "";

document.getElementById("enterguess").disabled = true;
document.getElementById("hint").disabled = true;
document.getElementById("guessbar").disabled = true;
	} 
	lowerOrHigher(num)
}	

//**************************************//

function lowerOrHigher(num){
	if ( num < winningNumber){
			var element1 = document.getElementById("header2");
element1.innerHTML = "You guessed to low";
	} else {
			var element1 = document.getElementById("header2");
element1.innerHTML = "You guessed to high";
	}

}

//**************************************//	

function duped(){									
	var element = document.getElementById("header"); 				//we do not counter-- here 
element.innerHTML = "You have already";								//return message 
		var element1 = document.getElementById("header2");
element1.innerHTML = "used this number"; 
}

function hint(){
	var arr = winningNumber.toString()
	if (arr.length ==2){											//if winningnumber is 2 digits long
		var element1 = document.getElementById("header3");	
element1.innerHTML = ("the number starts with " + arr.charAt(0)); 	//return msg with 1st digit
	} else {
		var element1 = document.getElementById("header3");			//if winningnumber is 1 digit long
element1.innerHTML = ("The number is under 10"); 					//return msg it is under 10
	}
}

//make a difference

