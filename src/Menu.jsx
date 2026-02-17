import React, { useContext } from "react";
import { userStr } from "./App";

function Menu() {
  const str = useContext(userStr);

  return (
    <div>
      <button className="text-xl p-1 flex justify-center font-bold">
        {str} : Menu
      </button>
    </div>
  );
}

export default Menu;