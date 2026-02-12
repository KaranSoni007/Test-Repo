// function ECommerceWeb() {
//   function CardView({ src, title, DiscountedPrice, OriginalPrice, MRP }) {
//     return (
//       <div className="flex items-center gap-4 p-4 w-400">
//         <img className="bg-gray-300 w-40 h-30" src={src} />

//         <div className="flex flex-col border bg-gray-100 p-1 gap-1">
//           <span className="text-md">{title}</span>

//           <span className="text-green-600 text-md">{DiscountedPrice}</span>

//           <div className="flex gap-3">
//             <span className="text-lg font-bold">{OriginalPrice}</span>

//             <span className="text-sm line-through items-center flex font-semibold">
//               {MRP}
//             </span>
//           </div>
//         </div>
//             {/* <button onClick={() => alert("Added to Cart")}
//             className="border p-1 bg-gray-900 text-white"
//             >Add to Cart</button> */}
//             function handleAddToCart() {
//   alert("Added to Cart");
// }

//       </div>
//     );
//   }

//   return (
//     <div>
//       <CardView
//         src={
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq7yD97kroo7dFmdKbgQnq-3QPQ8tLMSYuw&s"
//         }
//         title={"OnePlus U1 164cm (65inch) Ultra HD (4k)"}
//         DiscountedPrice={"Just ₹55,499*"}
//         OriginalPrice={"₹57,999"}
//         MRP={"65,999"}
//       />

//       <CardView
//         src={
//           "https://cdn.thewirecutter.com/wp-content/media/2025/10/BEST-32-IN-TV-3310.jpg?auto=webp&quality=75&width=1024"
//         }
//         title={"Blaupunkt 139cm (55inch) QLED Ultra HD"}
//         DiscountedPrice={"Just ₹34,499*"}
//         OriginalPrice={"₹39,999"}
//         MRP={"59,999"}
//       />

//       <CardView
//         src={"https://m.media-amazon.com/images/I/81KBpyj05eL.jpg"}
//         title={"Samsung Crystal 4k 163cm (65inch) OLED Ultra HD"}
//         DiscountedPrice={"Just ₹72,499*"}
//         OriginalPrice={"₹72,990"}
//         MRP={"1,16,999"}
//       />

//       <CardView
//         src={
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq7yD97kroo7dFmdKbgQnq-3QPQ8tLMSYuw&s"
//         }
//         title={"OnePlus U1S 164cm (65inch) Ultra HD (4k)"}
//         DiscountedPrice={"Just ₹57,499*"}
//         OriginalPrice={"₹59,999"}
//         MRP={"69,999"}
//       />

//       <CardView
//         src={
//           "https://5.imimg.com/data5/SELLER/Default/2024/5/420363303/EY/HA/OQ/93947452/vu-4k-smart-led-tv.jpg"
//         }
//         title={"VU 139cm (55inch) QLED 4k Ultra HD"}
//         DiscountedPrice={"Just ₹38,499*"}
//         OriginalPrice={"₹40,999"}
//         MRP={"65,999"}
//       />

//       <CardView
//         src={
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq7yD97kroo7dFmdKbgQnq-3QPQ8tLMSYuw&s"
//         }
//         title={"OnePlus U1SX 164cm (65inch) Ultra HD (4k)"}
//         DiscountedPrice={"Just ₹61,499*"}
//         OriginalPrice={"₹69,999"}
//         MRP={"79,999"}
//       />

//       <CardView
//         src={
//           "https://m.media-amazon.com/images/I/61M7Z1VpCwL._AC_UF1000,1000_QL80_.jpg"
//         }
//         title={"LG 164cm (65inch) 4k Ultra HD"}
//         DiscountedPrice={"Just ₹75,490*"}
//         OriginalPrice={"₹77,990"}
//         MRP={"1,14,999"}
//       />

//       <CardView
//         src={
//           "https://i03.appmifile.com/628_item_in/02/07/2025/a53f79aee77089a98e45438f39dcb86f.png"
//         }
//         title={"MI Q1 189.34cm (75inch) QLED Ultra HD"}
//         DiscountedPrice={"Just ₹1,37,499*"}
//         OriginalPrice={"₹1,44,999"}
//         MRP={"1,99,999"}
//       />

//       <CardView
//         src={
//           "https://i03.appmifile.com/628_item_in/02/07/2025/a53f79aee77089a98e45438f39dcb86f.png"
//         }
//         title={"MI Q1 189.34cm (75inch) QLED Ultra HD"}
//         DiscountedPrice={"Just ₹1,37,499*"}
//         OriginalPrice={"₹1,44,999"}
//         MRP={"1,99,999"}
//       />
//     </div>
//   );
// }
// export default ECommerceWeb;

import { useState } from "react";

function ECommerceWeb() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount((prev) => prev + 1);
    alert("Added to Cart");
  }

  function CardView({
    src,
    title,
    DiscountedPrice,
    OriginalPrice,
    MRP,
    onAdd,
  }) {
    return (
      <div className="flex items-center gap-4 p-4 w-100 border rounded-lg shadow-md bg-white">
        <img
          className="w-[40] h-[30] object-cover rounded-md"
          src={src}
          alt={title}
        />

        <div className="flex flex-col gap-1 flex-1">
          <span className="font-semibold">{title}</span>

          <span className="text-green-600 font-medium">{DiscountedPrice}</span>

          <div className="flex gap-3 items-center">
            <span className="text-lg font-bold">{OriginalPrice}</span>

            <span className="text-sm line-through text-gray-500 font-semibold">
              {MRP}
            </span>
          </div>
        </div>

        <button
          onClick={onAdd}
          className="border px-3 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
        >
          Add to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold">Cart Items: {cartCount}</h2>

      <CardView
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq7yD97kroo7dFmdKbgQnq-3QPQ8tLMSYuw&s"
        title="OnePlus U1 164cm (65inch) Ultra HD (4k)"
        DiscountedPrice="Just ₹55,499*"
        OriginalPrice="₹57,999"
        MRP="₹65,999"
        onAdd={handleAddToCart}
      />

      <CardView
        src="https://cdn.thewirecutter.com/wp-content/media/2025/10/BEST-32-IN-TV-3310.jpg?auto=webp&quality=75&width=1024"
        title="Blaupunkt 139cm (55inch) QLED Ultra HD"
        DiscountedPrice="Just ₹34,499*"
        OriginalPrice="₹39,999"
        MRP="₹59,999"
        onAdd={handleAddToCart}
      />

      <CardView
        src="https://m.media-amazon.com/images/I/81KBpyj05eL.jpg"
        title="Samsung Crystal 4k 163cm (65inch) OLED Ultra HD"
        DiscountedPrice="Just ₹72,499*"
        OriginalPrice="₹72,990"
        MRP="₹1,16,999"
        onAdd={handleAddToCart}
      />

      <CardView
        src="https://5.imimg.com/data5/SELLER/Default/2024/5/420363303/EY/HA/OQ/93947452/vu-4k-smart-led-tv.jpg"
        title="VU 139cm (55inch) QLED 4k Ultra HD"
        DiscountedPrice="Just ₹38,499*"
        OriginalPrice="₹40,999"
        MRP="₹65,999"
        onAdd={handleAddToCart}
      />

      <CardView
        src="https://m.media-amazon.com/images/I/61M7Z1VpCwL._AC_UF1000,1000_QL80_.jpg"
        title="LG 164cm (65inch) 4k Ultra HD"
        DiscountedPrice="Just ₹75,490*"
        OriginalPrice="₹77,990"
        MRP="₹1,14,999"
        onAdd={handleAddToCart}
      />
    </div>
  );
}

export default ECommerceWeb;
