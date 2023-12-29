import React from "react";

const Loading = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className=" h-32 w-32 text-[#235e86]">
        <h1 className="text-center text-2xl drop-shadow-md font-semibold">
          No Task...
        </h1>
      </div>
    </div>
  );
};

export default Loading;
