//assignment 16
// guest list a bigger dinner table
var guestlist = ["Mehroz", "Anas", "Wajahat Ali", "Ali Raza"];
//print message 
console.log("Great News! we found a bigger table ");
//unshift
guestlist.unshift("Shahrukh");
//splice
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Shaban");
//push
guestlist.push("Moiz");
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are cordially inivied to dinner"));
});
