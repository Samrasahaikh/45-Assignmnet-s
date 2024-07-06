//Assignment 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function 
// make_great() with a copy of the array of magicians’ names. Because the original 
// array will be unchanged, return the new array and store it in a separate array. Call 
// show_magicians() with each array to show that you have one array of the original 
// names and one array with the Great added to each magician’s name.
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
//making acopy original arry thorough .slice() function
var copy_magicians_names = magicians.slice();
// Modify the copied array to include "The Great" with thier names
var copy_great_magician = make_great(copy_magicians_names);
//Show both arrays original and copied
//original
console.log("\n Orginal array");
show_magicians(magicians);
//copied
console.log("\n copied array");
show_magicians(copy_magicians_names);
