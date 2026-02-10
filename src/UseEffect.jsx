//Q.1 First UseEffect program
// import { useEffect, useState } from "react";

// function counter() {

//     const [count, setCount] = useState(0)

//     useEffect(() => {

//         let timer = setTimeout(() => {
//             console.log("The button clicked", { count }, "times")
//             setCount(prev => prev + 1);
//         }, 1000);

//         return () => clearTimeout(timer);

//     }, [count]);

//     return (

//         <div>

//             <h2 className="text-xl">The button is clicked {count} times</h2>
//             <br />
//             <button className="text-lg bg-gray-300 border p-1"
//                 onClick={() => setCount(() => 0)}>Reset</button>

//         </div>
//     )
// }
// export default counter;




//Q.2 Square of numbers using UseEffect

// import { useEffect, useState } from "react";

// function Counter() {

//     const [count, setCount] = useState(0);
//     const [mul, setMul] = useState(0)

//     useEffect(() => {
//         setMul(() => count * count);
//     }, [count]);

//     return <div>
//         {
//             <>
//                 <h1>Multiplication Counter</h1>

//                 <h2>Count : {count}</h2>

//                 <button onClick={() => setCount((count) => count + 1)}>+</button>

//                 <h2> Square of {count} = {mul}</h2>

//             </>
//         }
//     </div>
// }
// export default Counter;


// Q.3 API data fetching using UseEffect

// import { useState, useEffect } from "react";

// function Fetch() {

//     const [user, setUser] = useState([])


//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((data) => data.json())
//             .then((data) => {
//                 setUser(data)
//             })

//     }, [])

//     return (

//         <div>

//             <h2>API data Fetching using UseEffect</h2>

//             {
//                 user.map((user) => (
//                     <p key={user.id}>{user.name}</p>
//                 ))
//             }

//         </div>
//     )
// }
// export default Fetch;