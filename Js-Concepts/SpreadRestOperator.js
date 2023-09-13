
let array = new Array(1,2,3);

let newArray = new Array(...array,4,5);

console.log(newArray);

const  Person = {
  name : "Human"
};

const John = {
  ...Person,
  age : "30"
};
console.log(John);

const print = (...args) => console.log(args.sort());

print(2,3,1,5,4);