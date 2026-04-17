// 🔹 Task 1: Variable Update

var num = 50;
num = 100;
console.log("The Value of Num is:", num);

// 🔹 Task 2: Let Variable Math

let marks = 80;
let result = marks + 10;
console.log("The result is: " + result);

// 🔹 Task 3: Const Value

const price = 500;
const finalPrice = price + 100;
console.log("The final price is:" + finalPrice);

// 🔹 Task 4: Printing Statements

// Print the following in console:
// "Welcome Team"
// 2026
// true

alert("Welcome Team");
console.log("Welcome Team");
document.write("Welcome Team", 2026);
let userWish = confirm("do you Know English ?");

console.log(userWish);

let YourAge = prompt("Enter your age?");

console.log(YourAge);

// 🔹 Task 5: Datatype Check

var name = "JavaScript";
var num = 250;
var boolean = false;

console.log(typeof name);
console.log(typeof num);
console.log(typeof boolean);

// 🔹 Task 6: Array Task

// Create array with 5 fruits.

const fruits = ["Guava", "Apple", "Banana", "Orange", "Grapes"];

// Print Full Array

console.log(fruits);

// Print First Fruit

console.log(fruits[0]);

// Print Last Fruit

console.log(fruits[fruits.length - 1]);

// 🔹 Task 7: Object Task

const student = {
  name: "Katru Satyanarayana",
  age: 26,
  course: "Front End Developer",
};

console.log("Student Name is:" + student.name);
console.log("Student Age is:" + student.age);

// 🔹 Task 8: Arithmetic Operators

console.log("sum of 20 + 10 is:", 20 + 10);
console.log("subtraction of 50 - 25 is:", 50 - 25);
console.log("multiplication of 5*5 is:", 5 * 5);
console.log("Division of 100/4 is:", 100 / 4);
console.log("Division of 20%3 is:", 20 % 3);

// 🔹 Task 9: Increment / Decrement

let x = 5;
x++;
console.log("X value is:", x);
// Then:
let y = 10;
y--;
console.log("Y value is:", y);

// 🔹 Task 10: Comparison Operators

console.log(10 > 5);
console.log(5 < 2);
console.log(20 == "20");
console.log(15 === "15");
console.log(10 != 8);

// 🔹 Task 11: Logical Operators

console.log(5 > 2 && 10 > 3);
console.log(7 < 5 || 8 > 2);
console.log(!(10 > 5));

// 🔹 Task 12: Ternary Operator
// Check age:
let age = 18;

age >= 18 ? console.log("Eligible") : console.log("Not Eligible");
