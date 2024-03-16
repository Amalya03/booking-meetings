import React, { useState } from "react";

export default function Item({ item, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      className="max-w-[300px] w-full h-[400px] relative cursor-pointer z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.image} alt="" className="w-full h-full" />
      {isHovered && (
        <div className="absolute w-[300px] h-[400px] top-0 flex bg-black opacity-[0.5]" />
      )}
      {isHovered && (
        <div className="absolute w-[300px] h-[400px] top-0 flex justify-center items-center">
          <span className="font-[500] z-50 text-white">{item.name}</span>
        </div>
      )}
    </div>
  );
}
