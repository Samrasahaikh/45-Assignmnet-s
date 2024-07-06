//assignment 15
//change gueste list 
var guesteList = ["Afreen", "Anaya", "Marukh",];
//print the name who can't  make dinner
var unableAttend = guesteList.splice(1, 1)[0];
console.log("".concat(unableAttend, ", can't make dinner"));
//push
guesteList.push("Samra ");
//print a message
guesteList.forEach(function (guest) {
    console.log(("Dear ".concat(guest, ", you are cordially invited to dinner ")));
});
