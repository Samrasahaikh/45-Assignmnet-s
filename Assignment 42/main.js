// Assignment 42
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a 
// function called make_great() that modifies the array of magicians by adding the 
// phrase the Great to each magician’s name. Call show_magicians() to see that the 
// list has actually been modified.
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + " The Great";
    }
}
make_great(magicians); //Modifies the original arry
show_magicians(magicians); //shows modify names
