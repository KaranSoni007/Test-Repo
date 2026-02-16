import React, { useContext } from "react";
import { userStr } from "./App";

function Contact() {
  const str = useContext(userStr);

  return (
    <div>
      <button className="text-xl p-1 flex justify-center font-bold">
        {str} : Contact
      </button>
    </div>
  );
}

export default Contact;
