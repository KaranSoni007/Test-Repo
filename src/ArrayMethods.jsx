// Q.1 Double the Array
// import React from "react";
// const Array = [1, 2, 3, 4, 5]
// function ArrayMethods() {
//     return <div>
//         {
//             Array.map((i) => <h1> {i * 2} </h1> )
//         }
//     </div>
// }
// export default ArrayMethods;


// Q.2 Return Even numbers
// import React from "react";
// const Array = [1, 2, 3, 4, 5]
// function ArrayMethods() {
//     return <div>
//         {
//             Array.filter((i) => (i % 2 === 0))
//                 .map((i) => <h1>{ i }</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;


// Q.3 Sum of all numbers in array
// import React from "react";
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function ArrayMethods() {
//     const sum = array.reduce((a,b) => a+b)
//     return <div>
//         {
//             array.reduce((i) => <h1>{ "Sum :" +sum }</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;


// Q.4 Array contains value or not
// import React from "react";
// function ArrayMethods() {
//     const Arr = ["Hello", "World"];

//     return <div>
//         {
//            Arr.includes("React") ? "Yes" : "No"
//         }
//     </div>
// }
// export default ArrayMethods;


// Q.5 Array to string

// import React from "react";
// const Array = ["Hello", "World"]
// function ArrayMethods() {
//     return <div>
//         {
//             Array.join(",")
//                 // .map((i) => <h1>{ i }</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;

// Q.6 Number greater than 50

// import React from "react";
// const Array = [10, 51, 67, 45, 59]
// let greaterNumber = Array.indexOf()
// function ArrayMethods() {
//     return <div>
//         {
//             Array.filter((greaterNumber) =>
//             {
//                 if(greaterNumber>50)
//                 {
//                     return greaterNumber>50;
//                 }
//             })
//             .map((greaterNumber) => <h1>{ (greaterNumber) }</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;


// Q.7 Sorting in ascending order

// import React from "react";
// const Array = [24, 11, 42, 31, 57]
// let sortedArray= Array.sort()
// function ArrayMethods() {
//     return <div>
//         {
//             Array.map((i) => <h1>{ i }</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;

// Q.8 Removal of elements from array

// import React from "react";
// const Array = [24, 11, 42, 31, 57]
// Array.pop()
// Array.pop()
// function ArrayMethods() {
//     return <div>
//         {
//             Array.map((i) => <h1>{ i }</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;


// Q.9 Return one array from two array

// import React from "react";
// const nameArray = ["Karan", "Jay", "Om"];
// const ageArray = [21, 11, 23]
// function ArrayMethods() {
//     return <div>
//         {
//             nameArray.map((nameArray) => <h1>{ nameArray }</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;

// Q.10 Check the numbers are positive in array

// import React from "react";
// const array = [24, -11, 42, 57, -4, -10, 20]

// function arrayMethods() {
//     const newLen = array.filter((i) => i > 0 ? true : false)

//     return <div>
//         {
//             array.filter((i) => i > 0)
//                 .map((i, index) => <h1 key = {index}>{i}</h1>)
//         }

//         <h2><p> {newLen.length} elements are positive in given array</p></h2>

//         {
//             array.filter((i) => i < 0)
//                 .map((i, index) => <h1 key={index}>{i}</h1>)
//         }
//     </div>
// }
// export default arrayMethods;



// Practice Questions
// Q.1 Given an array of numbers, return a new array with only even numbers.

// import React from "react";
// const Array = [24, -11, 42, 57, -4, -10, 20]

//  function ArrayMethods() {

//     return <div>
//         {
//             Array.filter((i) => (i%2 === 0))
//             .map((i) => (<h1>{i}</h1>))
//         }
//     </div>
//  }
//  export default ArrayMethods;



//  Q.2 Convert ["apple", "banana", "cherry"] into ["APPLE", "BANANA", "CHERRY"].

// import React from "react";

// const fruits = ["apple", "banana", "cherry"];

// function arrayMethods() {
//     const newArray = fruits.map(fruit => fruit.toUpperCase());

//     return (
//         <div>
//             {
//                 newArray.map((i, index) => (<h2 key={index}>{i}</h2>))
//             }
//         </div>
//     );
// }
// export default arrayMethods;

// Q.3 Find the sum of all numbers in [5, 10, 15, 20].

// import React from "react";
// const array = [5, 10, 15, 20]

// function arrayMethods() {
//     const sum = array.reduce((a, b) => (a + b));
//     const sub = array.reduce((a, b) => (a - b));
//     const mul = array.reduce((a, b) => (a * b));
//     const div = array.reduce((a, b) => (a / b));


//     return <div>
//         {
//             <div>
//                 <h2>Sum: {sum}</h2>
//                 <h2>Subtraction: {sub}</h2>
//                 <h2>Multiplication: {mul}</h2>
//                 <h2>Division: {div}</h2>
//             </div>
//         }
//     </div>
// }
// export default arrayMethods;

// Q.4 Check if any number in an array is greater than 50.

// import React from "react";
// const array = [50, 100, 37, 220, 151, 102]

// function ArrayMethods() {
//     return <div>
//         {
//             array.filter((i) => (i > 50))
//                 .map((i, index) => <h1 key={index}>{i}</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;

// Q.5 Remove all falsy values from [0, 1, false, 2, "", 3, null].

// import React from "react";
// const array = [0, 1, false, 2, "", 3, null]
// const cleanedArray = array.filter(Boolean);

// function ArrayMethods() {
//     return <div>
//         {
//             cleanedArray.map((i, index) => <h1 key = {index}>{i}</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;

// Q.6 From an array of users:[{name: "Alice", age: 22}, {name: "Bob", age: 17} Return only users 18 or older.
// import React from "react";
// const array = [
//     { name: "Alice", age: 22 },
//     { name: "Bob", age: 17 }
// ]
// function ArrayMethods() {
//     return <div>
//         {
//             array.filter((i) => (i.age >= 18))
//                 .map((i) => <h1 key = {i.name}>{i.name} - {i.age}</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;


// Q.7 Get an array of names only from an array of objects.
// import React from "react";
// const array = [
//     {name : "Karan", id : "1"},
//     {name : "Krutik", id : "2"},
//     {name : "Aditya", id : "3"}
// ]
// function ArrayMethods() {
//     return <div>
//         {
//             array.map((i) => <h1>{i.name}</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;

// Q.8 Sort an array of numbers without mutating the original array.
// import React from "react";
// function arrayMethods({array}) {
//     const sortedarray = array.sort((a, b) => a - b)
//     return <div>
//         {
//             array.map((sortedarray) => <h1>{sortedarray}</h1>)
//         }
//     </div>
// }
// export default arrayMethods;

// Q.9 Find the longest string in an array

// import React from "react";
// function LongestString({ array }) {

//     const longest = array.reduce((longestStr, currentStr) =>
//         currentStr.length > longestStr.length ? currentStr
//             : longestStr );

//     return (
//         <div>
//             <h2>Longest String:</h2>
//             <h1>{longest}</h1>
//         </div>
//     );
// }

// export default LongestString;


// Q.10 Flatten this array: [1, [2, [3, 4]], 5]

// import React from "react";
// const array = [1, [2, [3, 4]], 5]
// const flatArray = array.flat(2)
// function ArrayMethods() {
//     return <div>
//         {
//             flatArray.map((i) => <h1>{i}</h1>)
//         }
//     </div>
// }
// export default ArrayMethods;