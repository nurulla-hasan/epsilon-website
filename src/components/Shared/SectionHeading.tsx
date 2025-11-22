import React from "react";

type SectionHeadingProps = {
  heading: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-10 ">{heading}</h1>
    </div>
  );
};

export default SectionHeading;
