import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db));
  };
  const addImageToPost = () => {};

  // Emoji library
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div className="border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide">
      <img
        src="https://avatars.githubusercontent.com/u/67508976?v=4s"
        alt=""
        className="h-11 w-11 rounded-full xl:mr-2.5 cursor-pointer"
      />

      <div className="divide-y divide-gray-800 w-full">
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

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
              <input
                type="file"
                ref={filePickerRef}
                hidden
                onChange={addImageToPost}
              />
            </div>

            <div className="icon rotate-90">
              <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon">
              <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            {showEmojis && (
              <Picker
                onSelect={addEmoji}
                style={{
                  position: "absolute",
                  marginTop: "465px",
                  marginLeft: -40,
                  maxWidth: "320px",
                  borderRadius: "20px",
                }}
                theme="dark"
              />
            )}
          </div>

          <button
            className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
            disabled={!input.trim() && !selectedFile} //trim will not allow a whitespace get enabled a tweet button.
            // onClick={sendPost}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
