// objects in javascript
// console.log("chaliye shuru karte hai");

// object creation
// let rectangle = {
//   length: 1,
//   breadth: 4,

//   draw: function () {
//     console.log("draw");
//   },
// };
// rectangle.draw();

// Factory Function

// function createRectangle(l, b) {
//   return (rectangle = {
//     length: l,
//     breadth: b,

//     draw() {
//       console.log("drawing rectangle");
//     },
//   });
// }
// let rectangleobj1 = createRectangle(5, 4);
// rectangleobj1.draw();

// Constructor Function -> Pascal Notation ->first letter of every word is capital
// Constructor function->properties/methods->initialize / define karta hai
// function Rectangle(len, bre) {
//   this.length = len;
//   this.breadth = bre;
//   this.draw = function () {
//     console.log("Drawing Rectangle");
//   };
// }
// object creation using constructor
// let rectangleObject = new Rectangle(2, 6);

// Dynamic Nature of objects
// rectangleObject.color = "yellow";
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//   "length",
//   "breadth",
//   `this.length = length;
//   this.breadth = breadth;
//   this.draw = function() {
//       console.log('drawing');
//   };`
// );

//  object creation using rectangle1
// let rect = new Rectangle1(2, 3);
// console.log(rect);

// Types in JS : 1)primitive or Value types  2) Reference types or objects
// reference types : inme same adress ko darshaya jata hai.
// let a = { value: 10 };
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// primitive types : inme copy banti hai
// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);

// NOTE:Primitives are copied by their value
// NOTE:References are copied by their address/references.

// pass by value
// let a=10;
// function inc(a)
// {
//     a++;
// }
// inc(a);
// console.log(a);

// pass by reference
// let a = { value: 10 };
// function inc(a) {
//   a.value++;
// }
// inc(a);
// console.log(a);

// for-of loop and for-in loop

// let rectangle = {
//   length: 2,
//   breadth: 4,
// };
// for-in loop
// for(let key in rectangle){
// keys are refelected through key variable
// values are refelected through rectangle[key]
//     console.log(key,rectangle[key])
// }

// for-of loop
// for (let key of Object.entries(rectangle)) {
//   console.log(key);
// }

// if ("color" in rectangle) {
//   console.log("Present");
// } else {
//   console.log('Absent');
// }

// Object Cloning

// 1.via Iteration
// let src = { value: 10 };
// let dest = {};
// for (let key in src) {
//   dest[key] = src[key];
// }

// 2.via assigning
<<<<<<< HEAD
// let dest = Object.assign({}, src);

// 3.via spread
// let dest = { ...src };

// Garbage Collection: helps us find the variables and constants that are not in use and deallocate the memory given to them automatically
// garbage collector is the tool in js that does garbage collection
// it runs in the background and continues its work.
=======

>>>>>>> 2647c4805893753d93e8ce473dbfab50a19f0576
