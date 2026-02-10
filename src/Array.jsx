// Array Mapping:-

// import React from "react";
// const price = [1, 2, 3, 4, 5, 6]
// function Array() {
//     return <div>
//         {
//             price.map((index) => <h1>{index}</h1>)
//         }
//     </div>;
// }
// export default Array;




// Array Filtering:-

// import React from "react";

// const price = [1, 3, 6, 9, 12]
// function Array() {
//     const newArray = price.filter((num) => {
//         if (num === 6) {
//             return false;
//         }
//         else {
//             return true;
//         }
//     })

//     return <div>
//         {
//             newArray.map((index) => <h1>{index}</h1>)
//         }
//     </div>;
// }
// export default Array;




// Array for Image Mapping:-

// import React from "react";

// function Array() {
//     const images = ["https://media.istockphoto.com/id/1526986072/photo/airplane-flying-over-tropical-sea-at-sunset.jpg?s=612x612&w=0&k=20&c=Ccvg3BqlqsWTT0Mt0CvHlbwCuRjPAIWaCLMKSl3PCks=", "https://thumbs.dreamstime.com/b/air-travel-airplane-silhouette-fyling-against-sun-water-summer-vacation-holiday-concept-45240306.jpg"]

//     return <div>
//         {
//             images.map((images) => <div> <img src={images} /> </div>)
//         }
//     </div>
// }
// export default Array;




// Array Mapping with Images and other details:-

import React from "react";

function Array() {
    const images = [
        {
            image: "https://media.istockphoto.com/id/1526986072/photo/airplane-flying-over-tropical-sea-at-sunset.jpg?s=612x612&w=0&k=20&c=Ccvg3BqlqsWTT0Mt0CvHlbwCuRjPAIWaCLMKSl3PCks=",
            text1: "Hello!",
            text2: "Flight 1"
        },
        {
            image: "https://media.istockphoto.com/id/1526986072/photo/airplane-flying-over-tropical-sea-at-sunset.jpg?s=612x612&w=0&k=20&c=Ccvg3BqlqsWTT0Mt0CvHlbwCuRjPAIWaCLMKSl3PCks=",
            text1: "Hello!",
            text2: "Flight 2"
        }
    ]
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-evenly"
        }}>
            {
                images.map((im) =>
                    
                    <div>
                        <img src={im.image} />


                        <h1>{im.text1}</h1>

                        <h1>{im.text2}</h1>
                    </div>
                )
            }
        </div>
    )
}
export default Array;