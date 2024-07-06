//Assignment 41
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.

let magicians : string[] = ["Alice", "David", "Chris"];
function show_magicians(magicians:string[]) {
    magicians.forEach((magicians) => {
        console.log(magicians);
        
    });
}
show_magicians(magicians);