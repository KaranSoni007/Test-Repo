// E-Commerce Website using Map and Filter methods of Array

import { images } from "./Data.jsx";

function ECommerceArray() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-evenly"

        }}>

            {
                images.filter((image) => {
                    if (image.category === "Mobile") {
                        return true;
                    }
                })
                    .map((i, index) => {

                        return (

                            <div>
                                <img src={i.image}
                                    height={"250px"}
                                    width={"250px"}
                                />

                                <h1 align="center">{i.category}</h1>

                                <h2 align="center">{i.index}</h2>
                            </div>
                        )
                    })}
        </div>
    )
}
export default ECommerceArray;