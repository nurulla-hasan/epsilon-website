import React from "react";

type TextHeadingProps = {
  text2: string;
};

const TextHeading2: React.FC<TextHeadingProps> = ({ text2 }) => {
  return (
    <div>
      <h1 className="text-xl  text-[#396cbb] my-5 font-sans">{text2}</h1>
    </div>
  );
};

export default TextHeading2;
