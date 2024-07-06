//Assignment 21
// they thing of something you could store in a typescript object,
// write a program that creates objects containing these itmes.

let objectContainingItems : {[key: string]:any}={
  "laptop":{
    name : "laptop",
    price : 100000,
    brand : "HP",
    color : "black",
  } ,
  "mobail":{
    name : "mobail",
    price : 10000,
    brand : "Apple",
    color : "Silver",
  },
    "watch":{
        name : "watch",
        price : 1000,
        brand : "Samsung",
        color : "black",
    }
};
console.log(objectContainingItems);
