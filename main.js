console.log("hello there !");
console.log(15 * 5);
var x = 5;
var y = 6;
console.log(x * y);
/*let name = "hello";
console.log(name);
name = prompt("enter name");
console.log(name);
const tel = prompt("tel n°:");
console.log(tel);*/
//tel = 544646456;

//primitive data :
//string
const str = "hello !";
const title = "hello";
console.log(str, title);
//number
const number = 12365885;
//boolean
const present = true;
//non primitive data:
//arrays
const students = ["amal", "ahmed", "raslen", "yassine", "omar", "hayfa"];
const studentsNum = [122, 999, 99559, 44848, 7979, 97898];
console.log(students[2], studentsNum[0], students[6]);
//objects:
const student1 = {
  firstName: "ahmed",
  number: 566565454,
};
console.log(student1.number);
//object array
const rep = [
  {
    firstName: "joe",
    num: 44959659949,
    address: "23 lalaland",
  },
  {
    firstName: "jane",
    num: 55994949498,
    address: "25 ioceoicjeiocj",
  },
];
console.log(rep[1].firstName);
console.log(students.length);
for (let i = 0; i < students.length; i++) {
  console.log("hello " + students[i]);
  console.log(i * (i + 1));
}
function findMinors(variable) {
  if (variable > 18) {
    console.log(variable + " adult");
  } else if (variable == 18) {
    console.log(variable + " barely adult!");
  } else {
    console.log(variable + " minor");
  }
}
const age = prompt("enter age");
findMinors(age);
const ages = [5, 18, 20, 90, 0, 98];
for (let i = 0; i < ages.length; i++) {
  findMinors(ages[i]);
}
