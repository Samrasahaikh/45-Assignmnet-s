//Assignment 25

// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color : string = "green";

//• Write an if statement to test whether the alien’s color is green. If it is, print a message 
//that the player just earned 5 points.

if (alien_color == "green" ){
    console.log("You just earned 5 points!");
};

// version that fails (no output);

alien_color = "red";
if (alien_color == "green"){
    console.log("player just earned 5 points!");
};