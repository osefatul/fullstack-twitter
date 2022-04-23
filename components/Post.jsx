import React from "react";

function Post({ id, post, postPage }) {
  console.log("post", post);
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      {!postPage && (
        <img
          src={post?.userImg}
          alt=""
          className="h-11 w-11 rounded-full mr-4"
        />
      )}
    </div>
  );
}

export default Post;
