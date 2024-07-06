//Assignment 45
function create_car(manufactrure, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initialize a car object with manufacturer and model
    var car = {
        manufactrure: manufactrure,
        model: model,
    };
    //Add additional options to the  car object
    options.forEach(function (option) {
        var _a = option.split(":"), Key = _a[0], value = _a[1];
        car[Key.trim()] = value.trim();
    });
    return car;
}
//Call the function to creat a car object
var my_car = create_car("Toyota", "Corrolla", "colour: Black", "Sunroof: True", "Year: 2024");
//Print the variable to ensure all the information is storted correctly in the car object
console.log(my_car);
