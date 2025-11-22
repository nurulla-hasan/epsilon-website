import React from "react";

type TextHeadingProps = {
  text: string;
};

const TextHeading: React.FC<TextHeadingProps> = ({ text }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-800 my-5">{text}</h1>
    </div>
  );
};

export default TextHeading;
