// import Products from "./Products";

// function ECommerceWeb() {
//   function CardView({ src, title, DiscountedPrice, OriginalPrice, MRP }) {
//     return (
//       <div className="flex items-center gap-4 p-4 w-400">
//         <img className="bg-gray-300 w-40 h-30" src={src} />

//         <div className="flex flex-col border p-1 gap-1">
//           <span className="text-md">{title}</span>

//           <span className="text-green-600 text-md">{DiscountedPrice}</span>

//           <div className="flex gap-3">
//             <span className="text-lg font-bold">{OriginalPrice}</span>

//             <span className="text-sm line-through items-center flex font-semibold">
//               {MRP}
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {Products.map((product, index) => (
//         <CardView
//           key={index}
//           src={product.src}
//           title={product.title}
//           DiscountedPrice={product.DiscountedPrice}
//           OriginalPrice={product.OriginalPrice}
//           MRP={product.MRP}
//         />
//       ))}
//     </div>
//   );
// }

// export default ECommerceWeb;

import Products from "./Products";
function CardView({ src, title, DiscountedPrice, OriginalPrice, MRP }) {
  return (
    <div className="flex flex-col border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="h-48 overflow-hidden bg-gray-100">
        <img
          className="w-full h-full object-contain p-4"
          src={src}
          alt={title}
        />
      </div>

      <div className="flex flex-col p-4 gap-2">
        <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
          Deal of the day
        </span>
        <h3 className="text-md font-semibold truncate">{title}</h3>

        <div className="flex flex-col">
          <span className="text-green-600 font-bold text-sm">
            {DiscountedPrice}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold">{OriginalPrice}</span>
            <span className="text-sm line-through text-gray-400">{MRP}</span>
          </div>
        </div>

        <button className="mt-2 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function ECommerceWeb() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8">Televisions</h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Products.map((product, index) => (
          <CardView key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ECommerceWeb;
