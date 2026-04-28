// Task 1: Student Form Function

function studentForm(name, age, course) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Course: ${course}`);
}

studentForm("Satya", 26, "Full Stack");

// Task 2: Calculator Function

function calc(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
}

calc(10, 22);

// Task 3: Reusable Greeting

// Call same function for 3 users:

function greeting(name) {
  console.log(`Hello ${name}`);
}

greeting("Kamal");
greeting("Praveen");
greeting("Sai");

// Task 4: Return Value

function square(num) {
  return num ** 2;
}

let squareValue = square(5);

console.log(squareValue);

// Task 5: Scope Check

function scopeCheck() {
  let secret = "javascript";
}

// console.log(secret);

scopeCheck();

// Explanation :

// It is coming secret is not defined. Because Let variable is block scope.
// if you want use function inside declared variable outside the function.At that time You can use global scope using var variable.

// Task 6: Merge Arrays

let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let totalToys = [...boys, ...girls];

console.log(totalToys);

// Task 7: Unlimited Numbers

let sumAll = (...nums) => {
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  return sum;
};

console.log(sumAll(10, 20, 30, 40));

// Task 8: Array Destructuring

let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;

console.log(c1);
console.log(c2);
console.log(c3);

// Task 9: Object Destructuring

let emp = {
  name: "Naveen",
  role: "Developer",
  salary: "5LPA",
};

// console.log(emp.name);
// console.log(emp.role);

let { name, role, salary } = emp;

console.log(`${name} ${role}`);

// Task 10: Offer Generator

// Use generator function.

function* gen() {
  yield "10% cashback";
  yield "20% cashback";
  yield "50% cashback";
  yield "Try again";
}

let allValues = gen();

console.log(allValues.next());
console.log(allValues.next());
console.log(allValues.next());
console.log(allValues.next());

if (allValues.next().done) {
  console.log("No more offers");
}

// Task 11: Curry Function

function add(a) {
  return function b(b) {
    return function c(c) {
      return a + b + c;
    };
  };
}

console.log(add(10)(20)(30));

// Task 12: Student Marks Analyzer

function marks(...nums) {
  let totalmarks = 0;

  for (let n of nums) {
    totalmarks += n;
  }

  let average = totalmarks / nums.length;

  console.log(`Total = ${totalmarks}`);
  console.log(`Average = ${average}`);
}

marks(80, 90, 70, 60);

// Challenge Task (Real Company Level)

// Create employee registration system:

function register(name, role, ...skills) {
  console.log(`Name:${name}`);
  console.log(`Role: ${role}`);
  console.log(`Skills: ${skills}`);
}

register("Satya", "FrontendDeveloper", "HTML", "CSS", "JS", "React");
