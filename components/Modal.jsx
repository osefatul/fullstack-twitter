import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import {
  onSnapshot,
  doc,
  addDoc,
  collection,
  serverTimestamp,
} from "@firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Moment from "react-moment";

function Modal() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [post, setPost] = useState();
  const [comment, setComment] = useState("");
  const router = useRouter();

  return (
    <div className="h-screen w-screen top-0 right-0 left-0 z-50 fixed flex items-center justify-center bg-[#5b7083] bg-opacity-40 transition ease-out duration-300 ">
      {/* <div className="bg-white w-[36rem] h-[36rem] rounded-lg py-4 px-6 flex flex-col justify-between relative text-black transition ease-out duration-300 ">
        <span
          className="w-6 h-6 flex items-center justify-center cursor-pointer mb-5 absolute -top-2 -right-1 rounded-full bg-black text-white"
          onClick={() => setIsOpen(false)}
        >
          X
        </span>
        <h1 className="text-black text-xl font-bold">Add a new Pizza</h1>

        <div className="flex flex-col mb-3 text-black">
          <label className="text-black font-bold" htmlFor="">
            Title
          </label>
          <input className="border-b-2 border-gray" type="text" />
        </div>

        <div className="flex flex-col mb-3 text-black">
          <label className="mb-1 text-black font-bold" htmlFor="">
            Desc
          </label>
          <textarea className="border-2 border-gray" type="text" rows={4} />
        </div>

        <div className="flex flex-col mb-3 text-black">
          <label className="mb-1 text-black font-bold" htmlFor="">
            Prices
          </label>
          <div className="flex justify-between">
            <input
              className="border-b-2 border-gray w-[25%]"
              type="number"
              placeholder="Small"
            />

            <input
              className="border-b-2 border-gray w-[25%]"
              type="number"
              placeholder="Medium"
            />

            <input
              className="border-b-2 border-gray w-[25%]"
              type="number"
              placeholder="Large"
            />
          </div>
        </div>

        <div className="flex flex-col mb-3 text-black">
          <label className="mb-1 text-black font-bold" htmlFor="">
            Extra
          </label>
          <div className="flex justify-between mb-2">
            <input
              className="border-b-2 border-gray w-[25%]"
              type="text"
              placeholder="Item"
              name="text"
            />
            <input
              className="border-b-2 border-gray w-[25%]"
              type="number"
              placeholder="Price"
              name="price"
            />

            <button className="border border-black rounded w-12">Add</button>
          </div>
        </div>

        <button className=" p-1 rounded w-[25%] bg-[teal] text-white cursor-pointer fonto-bold self-end">
          Create
        </button>
      </div> */}

      <div className="inline-block align-bottom bg-black rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
        <div className="flex items-center px-1.5 py-2 border-b border-gray-700">
          <div
            className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
            onClick={() => setIsOpen(false)}
          >
            <XIcon className="h-[22px] text-white" />
          </div>
        </div>
        <div className="flex px-4 pt-5 pb-2.5 sm:px-6">
          <div className="w-full">
            <div className="text-[#6e767d] flex gap-x-3 relative">
              <span className="w-0.5 h-full z-[-1] absolute left-5 top-11 bg-gray-600" />
              <img
                src={post?.userImg}
                alt=""
                className="h-11 w-11 rounded-full"
              />
              <div>
                <div className="inline-block group">
                  <h4 className="font-bold text-[#d9d9d9] inline-block text-[15px] sm:text-base">
                    {post?.username}
                  </h4>
                  <span className="ml-1.5 text-sm sm:text-[15px]">
                    @{post?.tag}{" "}
                  </span>
                </div>{" "}
                ·{" "}
                <span className="hover:underline text-sm sm:text-[15px]">
                  <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
                </span>
                <p className="text-[#d9d9d9] text-[15px] sm:text-base">
                  {post?.text}
                </p>
              </div>
            </div>

            <div className="mt-7 flex space-x-3 w-full">
              <img
                src={session.user.image}
                alt=""
                className="h-11 w-11 rounded-full"
              />
              <div className="flex-grow mt-2">
                {/* <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tweet your reply"
                  rows="2"
                  className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[80px]"
                /> */}

                <div className="flex items-center justify-between pt-2.5">
                  <div className="flex items-center">
                    <div className="icon">
                      <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
                    </div>

                    <div className="icon rotate-90">
                      <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
                    </div>

                    <div className="icon">
                      <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
                    </div>

                    <div className="icon">
                      <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
