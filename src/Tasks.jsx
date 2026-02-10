// Task 1 :
// take one array of number and print that array
// Task 2 :
// take one array of number and print cube of that array
// x --> x3
// Task 3 :
// take one array of strings and print that array
// Task 4 :
// take one array of object and print that array
// Task 5 :
// take one array of number and print even number from that array
// Task 6 :
// take one array of number and print odd number from that array

// Task 1
// import React from "react";

// const Array = [1, 2, 3, 4, 5]

// function Tasks() {

//     return (
//         <div>
//             {
//                 Array.map((index) => <h1>{index}</h1>)
//             }
//         </div>
//     )
// }
// export default Tasks;

// Task 2
// import React from "react";

// const Array = [1, 2, 3, 4, 5]

// function Tasks() {

//     return (
//         <div>
//             {
//                 Array.map((index) => <h1>{index*index*index}</h1>)
//             }
//         </div>
//     )
// }
// export default Tasks;

// Task 3
// import React from "react";

// const Array = ["BMW", "Mercedes", "Toyota", "Volkswagen", "Volvo"]

// function Tasks() {

//     return (
//         <div>
//             {
//                 Array.map((i) => <h2>{i}</h2>)
//             }
//         </div>
//     )
// }
// export default Tasks;

// Task 4
// const Array = [
//     {
//         Brand: "BMW", Origin: "Germany"
//     },
//     {
//         Brand: "Tata", Origin: "India"
//     },
//     {
//         Brand: "Toyota", Origin: "Japan"
//     },
//     {
//         Brand: "Ford", Origin: "USA"
//     },
//     {
//         Brand: "Volvo", Origin: "Swedan"
//     },
// ]

// function Tasks() {
//     return (
//         <div>
//             {
//                 Array.map((i) => <div key={i}>
//                         <h3>Brand : {i.Brand}</h3>
//                         <h3>Origin : {i.Origin}</h3>
//                         <br />
//                 </div>)
//             }
//         </div>
//     )
// }
// export default Tasks;

// Task 5
// const Array = [1, 2, 3, 4, 5, 6, 7, 8]

// function Tasks() {

//     return (
//         <div>
//             {
//                 Array.filter(index => index % 2 === 0)
//                     .map((index) => (<p><h2><b> {index} </b></h2></p>)
//                     )
//             }
//         </div>
//     )
// }
// export default Tasks;

// Task 6
const Array = [1, 2, 3, 4, 5, 6, 7, 8]

function Tasks() {

    return (
        <div>
            {
                Array.filter(index => index % 2 === 1)
                    .map((index) => (<p><h2><b> {index} </b></h2></p>)
                    )
            }
        </div>
    )
}
export default Tasks;