// 1️⃣ Create Student Data
// let students = [
//   { id: 1, name: "Naveen", mark: 85, course: "MERN" },
//   { id: 2, name: "John", mark: 45, course: "Python" },
//   { id: 3, name: "Priya", mark: 72, course: "Java" },
//   { id: 4, name: "Arun", mark: 95, course: "React" },
// ];
// // 📌 Task 1: Print All Students

// for (let i in students) {
//   if (i == 0 || i == 1) {
//     console.log(students[i]);
//   }
// }

// 📌 Task 2: Pass / Fail

// let name = prompt("Enter your name:");
// let marks = prompt("Enter your marks: ");

// if (marks >= 50) {
//   console.log(`${name}: pass`);
// } else {
//   console.log(`${name}: fail`);
// }

//  Task 3: Grade System

// let marks = prompt("Enter your marks: ");

// if (marks > 90) {
//   console.log("Your Grade is : A");
// } else if (marks > 75) {
//   console.log("Your Grade is : B");
// } else if (marks > 50) {
//   console.log("Your Grade is : C");
// } else if (marks <= 50) {
//   console.log("You are failed");
// }

// 📌 Task 4: Topper Student
// Find highest mark student.

// let students = [
//   { id: 1, name: "Satya", marks: 97, course: "MCA" },
//   { id: 2, name: "Nani", marks: 86, course: "MBA" },
//   { id: 3, name: "Durgesh", marks: 100, course: "Inter" },
//   { id: 4, name: "Kalyan", marks: 99, course: "Degree" },
// ];

// let topper = students[0];

// for (let i = 1; i < students.length; i++) {
//   if (students[i].marks > topper.marks) {
//     topper = students[i];
//   }
// }

// console.log(`Topper is ${topper.name} - ${topper.marks}`);

// 📌 Task 5: Course Search

console.log("Task 5: Course Search");

let students = [
  { id: 1, name: "Satya", marks: 97, course: "REACT" },
  { id: 2, name: "Nani", marks: 86, course: "MERN" },
  { id: 3, name: "Durgesh", marks: 100, course: "PYTHON" },
  { id: 4, name: "Kalyan", marks: 99, course: "JAVA" },
];

for (let i = 0; i < students.length; i++) {
  if (students[i].course == "REACT") {
    let s = students[i];
    console.log(s.id, s.name, s.marks, s.course);
  }
}

// 📌 Task 6: Add New Student

console.log("Task 6: Add New Student");

students.push({ id: 5, name: "Rahul", marks: 88, course: "Node JS" });

for (let i = 0; i < students.length; i++) {
  let s = students[i];
  console.log(s.id, s.name, s.marks, s.course);
}

// 📌 Task 7: Attendance System

console.log("Task 7: Attendance System");

let status = "absent";

switch (status) {
  case "present":
    console.log("Welcome");
    break;
  case "absent":
    console.log("Mark Absent");
    break;

  case "leave":
    console.log("Approved Leave");
    break;
  default:
    console.log("Invalid Status");
}

// 📌 Task 8: Login System

console.log("Task 8: Login System");

let username = "admin";
let password = "1234";

let userInputName = prompt("enter your username:");
let userInputPassword = prompt("enter your password:");

if (username == userInputName && userInputPassword == password) {
  console.log("Login Success");
} else {
  console.log("Invalid User");
}
