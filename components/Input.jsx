import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide">
      <img
        src="https://avatars.githubusercontent.com/u/67508976?v=4s"
        alt=""
        className="h-11 w-11 rounded-full xl:mr-2.5 cursor-pointer"
      />

      <div className="w-full divide-y divide-gray-700 ">
        <div>
          <textarea
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
            placeholder="What's happening?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="2"
          />

          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
