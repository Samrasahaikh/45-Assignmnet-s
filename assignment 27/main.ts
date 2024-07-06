//Assignment 27
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alien_color : string ="pink";

//If the alien is green, print a message that the player earned 5 points.
alien_color = "green";
if (alien_color == "green"){
    console.log("You earned 5 points.");
} else if (alien_color == "yellow"){
    console.log("You earned 10 points.");
} else if ( alien_color == "red"){
    console.log("You earned 15 points.");  
}

//If the alien is yellow, print a message that the player earned 10 points.
alien_color ="yellow";
if ( alien_color == "green"){
    console.log("You earned 5 points.");
} else if (alien_color == "yellow"){
    console.log("the player earned 10 points"); 
} else if ( alien_color == "red"){
    console.log("Tou earned 15 points.");
}

// If the alien is red, print a message that the player earned 15 points.
alien_color = "red";
if (alien_color == "green"){
    console.log("You earned 5 points.");
} else if (alien_color == "yellow"){
    console.log("The player earned 10 points");
} else if (alien_color == "red"){
    console.log("the player earned 15 points");
}
export{} // To prevent errors from redeclaration