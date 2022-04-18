import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  return (
    <div className="border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide">
      <img
        src="https://avatars.githubusercontent.com/u/67508976?v=4s"
        alt=""
        className="h-11 w-11 rounded-full xl:mr-2.5 cursor-pointer"
      />

      <div className="w-full divide-y divide-gray-700 ">
        <div>
          <textarea value={input} rows="3"></textarea>
        </div>
      </div>
    </div>
  );
}

export default Input;
