// assignment 12
// store names in arry 
var names = ["Anam", "Hani", "Kainat", "Hina", "Bushra", "Saniya"];
// print same message aech person name 
//loop
for (var i = 0; i < names.length; i++) {
    console.log("Hello ".concat(names[i], "! would you like to learn some TypeScript today "));
}
;
//for aech
names.forEach(function (friends) {
    console.log("Hi friends".concat(friends, "! would you like to learn some TypeScript today "));
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendsName = names_1[_i];
    console.log("Hello ".concat(friendsName, "! would you likr to learn some TypeScript today"));
}
;
