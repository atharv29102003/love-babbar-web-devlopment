// string in the form of primitive
// let lastName = "deshpande";
// as we use dot operator in primitive string it starts to behave as an object
// console.log(lastName.length);
// string in the form of object using String constructor
// let firstName = new String("Atharv");

// let message = "this is my first  message";
// let words = message.split(" ");
// console.log(message);

// escape sequences
// let dessage = "this is ' my first ' message";
// console.log(dessage);

// Template Literals: means writing in back-literal(``).

// let secondmess = `This is
// my
// second message`;
// console.log(secondmess);
// Object literal : ${   }
// let mesg = `Hello ${firstName},
// Thanks for growing up good enough `;
// console.log(mesg);

// Date
// let date = new Date();
// console.log(date);
// let date2 = new Date("June 20 1998 07:15");
// console.log(date2);
// let date3 = new Date(2003, 9, 29, 7);
// console.log(date3);
// date3.setFullYear(1947);
// console.log(date3);

// ARRAYS (IMPORTANT)

// let numbers = [1, 2, 3, 7];
// console.log(numbers);
// console.log(numbers[0]);
// Insertion in an array
// numbers.push(9); //inserting an element in the end of an array
// console.log(numbers);
// numbers.unshift(8); //inserting an element in the beginning of array
// console.log(numbers);
// numbers.splice(3, 0, "a", "b", "c"); //inserting an element in the middle of array
// console.log(numbers); // here 3 indicates index,0 indicates delete count and the other three indicate te elements to be inserted

//Searching in an array
// console.log(numbers.indexOf(7));

// check if number exist in an array or not
// console.log(numbers.includes(7));
// console.log(numbers.indexOf(4, 2));

// Now we start coding on assertive type i.e. objects
let courses = [
  { no: 1, naam: "Atharv" },
  { no: 2, naam: "Deshpande" },
];
console.log(courses);
// console.log(courses.indexOf({ no: 1, naam: "Atharv" })); //yaha ka jo object hai aur array ka jo object hai vo alag hai
// console.log(courses.includes({ no: 1, naam: "Atharv" })); //yaha ka jo object hai aur array ka jo object hai vo alag hai

// we use call back functions for searching in array of objects
let course = courses.find(function (course) {
  return course.naam == "Atharv";
});
console.log(course);
