//assignment 11
//arry
//Define for arry 
var names = ["Aqsa", "Mehwish", "Fatima", "Laiba", "Samra"];
//loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
;
//for each
names.forEach(function (friends) {
    console.log(friends);
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendsName = names_1[_i];
    console.log(friendsName);
}
;
