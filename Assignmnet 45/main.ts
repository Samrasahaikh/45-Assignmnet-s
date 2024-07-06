//Assignment 45

// Define a function to creat a car object with optinal optins...

interface Car {
    manufactrure: string;
    model: string;
    [key: string]:any
}
function create_car (manufactrure:string, model:string, ...options: string[]) : Car{
    //Initialize a car object with manufacturer and model
    let car: Car ={
        manufactrure: manufactrure,
        model: model,
    };


    //Add additional options to the  car object
    options.forEach(option =>{
        let [Key, value] = option.split(":");
        car[Key. trim()] = value.trim();
    });
    return car;
}


//Call the function to creat a car object
let my_car = create_car("Toyota", "Corrolla", "colour: Black", "Sunroof: True", "Year: 2024");

//Print the variable to ensure all the information is storted correctly in the car object
console.log(my_car);