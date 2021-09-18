// function createIncrement() {
//   let count = 0;
//   let message = "";

//   function increment() {
//     count = count + 1;
//     message = `Count is ${count}`;
//   }

//   function log() {
//     console.log(message);
//   }

//   return [increment, log];
// }

// const [increment1, log1] = createIncrement();
// increment1();
// increment1();
// increment1();
// log1(); // What is logged?

// --------------------------------------------------
// function createStack() {
//   const items = [];

//   function push(item) {
//     return items.push(item);
//   }
//   function pop() {
//     return items.pop();
//   }
//   return [push, pop, items];

// const [push, pop, item] = createStack();
// push(5);
// pop(5);
// push(10);
// push(100);
//console.log(item);

// Here’s a possible refactoring of createStack(): stack.items shouldnot be accessible on browser console

// function createStack1() {
//   const items = [];
//   return {
//     push(item) {
//       items.push(item);
//       console.log("i", items);
//     },
//     pop() {
//       return items.pop();
//     },
//   };
// }
//console.log(items); //items is not definedd this is case of encapsulation ...only push/pop will be able to access items nowhere it can be used even on browser also
// const stack1 = createStack1();
// stack1.push(10);
// stack1.push(5);
// stack1.pop(); // => 5

// stack1.items;

// // -----------------------------------------------------

// function multiply(num1, num2) {
//   if (num2 !== undefined) {
//     return num1 * num2;
//   }

//   return function inner(num2) {
//     return num1 * num2;
//   };
// }

// const mul = multiply(6, 4);
// console.log("mul", mul);

// const cal = multiply(2);
// cal(5);
// console.log(cal);

// ----------------------------------
// let z = 1;
// console.log("z", z);

// function x() {

//     for (var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(function() {
//                 console.log(x);
//             }, x * 1000);
//         }
//         close(i)
//     }
// }
// x();


// function a() {
//     var x = 10,
//         y = 20;
//     return function b() {
//         console.log(x)
//     }
// }
// var z = a();
// z();