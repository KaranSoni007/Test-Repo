// Q.1 Counter using UseState and Tailwind CSS

import { useEffect, useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    // useEffect(() => {

    //     setTimeout(() => {
    //         setCount(count => count + 1);
    //     }, 1000);

    // }, [count]);

    return (

        <div className="flex flex-col justify-center items-center gap-5">

            <div className="border flex flex-col p-2">
                <button className="text-xl border" onClick={() => setCount(count - 1)}> - </button>

                <h3 className="text-xl"> Count: {count} </h3>

                <button className="text-xl border" onClick={() => setCount(count + 1)}> + </button>
            </div>
            
            <button className="text-xl" onClick={() => setCount(0)}> Reset </button>

        </div>
    );
}
export default Counter;



// Q.2 Login page using UseState

// import { useState } from "react";

// function loginPage() {

//     const [name, setName] = useState("");
//     const [pass, setPass] = useState("");
//     const [showData, setShowData] = useState();

//     return (
//         <div className="flex flex-col items-center justify-center">

//             <form onSubmit={(e) => {
//                 if (name.length > 0) {
//                     alert("Data entered successfully !")
//                 }
//                 else {
//                     alert("Please enter some data !")
//                 }
//             }}>
//                 <h2 className="font-bold text-center text-2xl p-5">Login Page</h2>

//                 <div className="flex flex-col gap-5"
//                 >

//                     <input className="border" onChange={(e) => setName(e.target.value)}
//                         placeholder="Enter Name" required
//                     />

//                     <input className="border" type={showData ? "text" : "password"}
//                         onChange={(e) => setPass(e.target.value)}
//                         placeholder="Enter Password" required
//                     />
//                 </div>

//                 <div className="flex flex-row gap-5 p-5"
//                 >

//                     <button className="border" type="submit" >Submit</button>

//                     <button className="border" type="button" onClick={() => setShowData(!showData)}>
//                         {showData ? "Hide" : "Show"} Data
//                     </button>

//                 </div>
//             </form>

//             {
//                 showData && (
//                     <>
//                         <span> <b> My input :</b> {name} </span>
//                         <span>Password length : {pass.length} </span>
//                     </>
//                 )
//             }
//         </div >
//     );
// }
// export default loginPage;



// Q.3 Toggle Button

// import { useState } from "react";

// function toggle() {

//     const [isOn, setIsOn] = useState(false)

//     return <div>
//         {
//             <div className="flex flex-col text-xl items-center">

//                 <h1 className="font-semibold">Toggle Button</h1>

//                 <br />

//                 <button onClick={() => setIsOn(!isOn)}
//                     className="p-1 text-xl border"
//                 >

//                     {isOn ? "On" : "Off"}
//                 </button>
//             </div>
//         }
//     </div>
// }
// export default toggle;