// Q.1 Normal string to UpperCase conversion

// import React from "react";

// function StringMethods() {
//     const Text1 = "hello world"
//     const upperText = Text1.toUpperCase();

//     return <div>
//         {
//             <h1>{upperText}</h1>
//         }
//     </div>
// }
// export default StringMethods;


// Q.2 Length of given string

// import React from "react";

// const text = "Hello"
// const len = text.length;
// function StringMethods() {

//     return <div>
//         {
//             <h1>{len}</h1>
//         }
//     </div>
// }
// export default StringMethods;

// Q.3 Check if string includes "js"

// import React from "react";

// const text = "Reactjs"
// function StringMethods() {
//     return <div>
//         {
//             text.includes("js") ? "Yes" : "No"
//         }
//     </div>
// }
// export default StringMethods;

// Q.4 Removing extra spaces in a string

// import React from "react";

// const text = "    Hi There     "
// const newText = text.trim();

// function StringMethods() {

//     return <div>
//         {
//             <h1>{newText.length}</h1>
//         }
//     </div>
// }
// export default StringMethods;

// Q.5 Replace space with dash(-)

// import React from "react";

// const text = "     Hi There     "
// const newText = text.replaceAll(" ","-")

// function StringMethods() {
//     return <div>
//         {
//             <h1>{newText}</h1>
//         }
//     </div>
// }
// export default StringMethods;

// Q.7 Split a sentence into array of words

// import React from "react";

// const text = "Hello , How are you ?"
// const newText = text.split(" ");
// console.log(newText)

// function StringMethods() {
//     return <div>
//         {
//             <h1>{newText}</h1>
//         }
//     </div>
// }
// export default StringMethods;

// Q.8 Check whether a string starts with "https"

// import React from "react";

// const text = "//reactjs.tutorial1"

// function StringMethods() {
//     return <div>
//         {
//             text.includes("https") ? "Yes" : "No"
//         }
//     </div>
// }
// export default StringMethods;


// Q.9 Reverse a string

// import React from "react";

// const text = "React JS"
// const splitText = text.split("")
// console.log(splitText)
// const revString = splitText.reverse();
// function StringMethods() {
//     return <div>
//         {
//             <h1>{revString}</h1>
//         }
//     </div>
// }
// export default StringMethods;


// Q.10 How many times an element appears in a string

// import React from "react";

// const text = "Banana"
// const str = text.matchAll("a")
// function StringMethods() {
//     return <div>
//         {
//             <h1>{str}</h1>
//         }
//     </div>
// }
// export default StringMethods;





// Practice Questions
// Q.1 Reverse a string "hello world".

// import React from "react";
// const str = "hello world"
// const splitstr = str.split("")
// const revstr = splitstr.reverse();
// function StringMethods() {

//     return <div>
//         {
//             <h1>{revstr}</h1>
//         }
//     </div>
// }
// export default StringMethods;

// Q.2 Count how many times a character appears in a string.

// import React from "react";
// const str = "Banana"
// const newstr = str.matchAll("a")

// function StringMethods() {
//     return <div>
//         {
//             <h1>{newstr}</h1>
//         }
//     </div>
// }
// export default StringMethods;

// Q.3 Check if a string starts with a specific word.

// import React from "react";
// const str = "Hello"
// function StringMethods() {
//     const newstr = str.startsWith("e")

//     return <div>
//         {
//             <h1>{newstr ? "Starts with H" : "Doesn't start with H"}</h1>
//         }
//     </div>
// }
// export default StringMethods;

// Q.4 Remove all spaces from a string.

// import React from "react";
// const str = "  React JS     "
// console.log(str.length)
// const newstr = str.trim();
// console.log(newstr.length)
// function StringMethods() {
//     return <div>
//         {
//          <h1>{newstr}</h1>
//         }
//     </div>
// }
// export default StringMethods;


// Q.5 Convert: "my-variable-name" → "myVariableName"

// import React from "react";

// function StringMethods() {
//     const str = "my-variable-name";

//     const newStr = str
//         .split("-")
//         .map((word, index) =>
//             index === 0 ? word :
//                 word.charAt(0).toUpperCase() + word.slice(1)
//         )
//         .join("");

//     return (
//         <div>
//             <h1>{newStr}</h1>
//         </div>
//     );
// }

// export default StringMethods;

// Q.6 Replace all vowels in a string with *
// import React from "react";

// function StringMethods({ text }) {
//     const repText = text.replace(/[^aeiou]/gi,"*")
//     return <div>
//         {
//             <h1>{repText}</h1>
//         }
//     </div>
// }
// export default StringMethods;

// Q.7 Convert "javascript is fun" → "JavaScript Is Fun".

// function StringMethods() {
//     const str = "javascript is fun"
//     const newstr = str
//         .split(" ")
//         .map((word, index) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
//     return <div>
//         {
//             <h1>{newstr}</h1>
//         }
//     </div>
// }
// export default StringMethods;