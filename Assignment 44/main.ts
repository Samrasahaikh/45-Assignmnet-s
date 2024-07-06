//Assigment 44
//define a function with a rest parameter that accept items argumments representing our sandwich
function maka_sandwich(...items : string[]) {
    console.log("\nMaking a sandwich with the fllowing items:");

    items.forEach(signleItems => console.log(signleItems));
    console.log("\nNow Enjoy Sandwich \n");
};
//call the function 3 times with 3 deffrent number of arguments
maka_sandwich("Chicken", "Chesse", "Mayo", "Egg");

maka_sandwich("Bread", "Butter");

maka_sandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "katchup");