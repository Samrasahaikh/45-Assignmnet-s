//assignment 13
// save transportation name in arry and print same message each trasportation
var trasportationMode = ["Car", "Motorcycle", "Bicycle", "Bus"];
//loop
for (var i = 0; i < trasportationMode.length; i++) {
    console.log("I would like to own a".concat(trasportationMode[i]));
}
;
//foraech
trasportationMode.forEach(function (mode) {
    console.log("I would like to own a".concat(mode));
});
//for of loop
for (var _i = 0, trasportationMode_1 = trasportationMode; _i < trasportationMode_1.length; _i++) {
    var trasportation = trasportationMode_1[_i];
    console.log("I would like to own a".concat(trasportation));
}
