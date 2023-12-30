import React from "react";
import { VscFolderActive } from "react-icons/vsc";

const Loading = () => {
  return (
    <div className="flex flex-col items-center p-20 justify-center">
      <VscFolderActive className="text-[#235e86] text-3xl drop-shadow-md" />
      <h1 className="text-center text-[#235e86] text-2xl drop-shadow-md">
        No Pending Task.
      </h1>
    </div>
  );
};

export default Loading;
