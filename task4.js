// 🔹 Task 1: Array Basics
let arr = [10, 20, 30, 40, 50];

console.log(`First element: ${arr[0]}`);
console.log(`Last element: ${arr[arr.length - 1]}`);
console.log(`Total length: ${arr.length}`);

// 🔹 Task 2: Push & Pop
let arr1 = [1, 2, 3];

arr1.push(4, 5);
arr1.pop();

console.log("Task 2 Output:", arr1);

// 🔹 Task 3: Includes Check
let arr2 = ["html", "css", "javascript", "react"];

console.log("Task 3 Output:", arr2.includes("javascript"));

let emp = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 },
];

// 🔹 Task 4: Filter Salaries
let filtered = emp.filter((e) => e.salary > 20000);
console.log("Task 4 Output:", filtered);

// 🔹 Task 5: Map Names
let names = emp.map((e) => e.name);
console.log("Task 5 Output:", names);

// 🔹 Task 6: Reduce Sum
let totalSalary = emp.reduce((sum, e) => sum + e.salary, 0);
console.log("Task 6 Output:", totalSalary);

// 🔹 Task 7: Remove Duplicates
let arr3 = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arr3)];
console.log("Task 7 Output:", unique);

// 🔹 Task 8: Find Largest Number
let arr4 = [10, 200, 5, 90];
let max = Math.max(...arr4);
console.log("Task 8 Output:", max);

// 🔹 Task 9: Reverse String WITHOUT reverse()
let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log("Task 9 Output:", reversed);

// 🔹 Task 10: Group by Salary
let emp2 = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 10000 },
];

let grouped = emp2.reduce((acc, e) => {
  if (!acc[e.salary]) {
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});

console.log("Task 10 Output:", grouped);

// 🔹 Task 11: Flatten Array (without flat)
let arr5 = [1, [2, [3, [4]]]];

function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log("Task 11 Output:", flatten(arr5));

// 🔹 Task 12: Custom Sort (Descending)
let arr6 = [5, 2, 9, 1];

arr6.sort((a, b) => b - a);
console.log("Task 12 Output:", arr6);

// 🔹 Task 13: Second Largest
let arr7 = [10, 50, 20, 40];

let sorted = [...arr7].sort((a, b) => b - a);
console.log("Task 13 Output:", sorted[1]);

// 🔹 Task 14: Count Characters
let str2 = "aabbccdde";

let count = {};

for (let char of str2) {
  count[char] = (count[char] || 0) + 1;
}

console.log("Task 14 Output:", count);
