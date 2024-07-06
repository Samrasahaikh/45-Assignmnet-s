//Assigment 44
//define a function with a rest parameter that accept items argumments representing our sandwich
function maka_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the fllowing items:");
    items.forEach(function (signleItems) { return console.log(signleItems); });
    console.log("\nNow Enjoy Sandwich \n");
}
;
//call the function 3 times with 3 deffrent number of arguments
maka_sandwich("Chicken", "Chesse", "Mayo", "Egg");
maka_sandwich("Bread", "Butter");
maka_sandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "katchup");
