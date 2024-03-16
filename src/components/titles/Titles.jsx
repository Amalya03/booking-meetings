import React from "react";

const Titles = ({ text }) => {
  const texts = ["firstText", "secondText", "lastText"];

  return (
    <div className="flex flex-wrap text-center gap-[20px] w-full">
      {texts.map((item, index) => {
        return (
          <span
            key={`${item}_${index}`}
            className={`w-full ${
              item === "firstText"
                ? "text-4xl font-extrabold"
                : "text-[16px] font-semibold"
            }`}
          >
            {text[item]}
          </span>
        );
      })}
    </div>
  );
};

export default Titles;
