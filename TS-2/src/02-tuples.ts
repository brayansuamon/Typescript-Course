//May be number or string
const prices: (number | string)[] = [1, 2, 3, 4]
prices.push(2)

//Tuple only two values inside the array
//First value a string, second number and third boolean, all are required
let user: [string, number, boolean];
user = ['brayansuamon', 24, true]

//Destruction tuple
const [username ,  age] = user
console.log(username, age);
//Hook useState use a tuple
