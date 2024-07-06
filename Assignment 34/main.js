//Assignment 34
// Think of at least three kinds of your favorite pizza. Store these pizza names 
// in a array, and then use a for loop to print the name of each pizza.
var pizzas = ["Creamy Tikka", "Fiesta Chiken", "Chiken Malai"];
pizzas.forEach((function (pizza) {
    console.log("I Like ".concat(pizza, " pizza."));
}));
console.log("I really love pizza");
