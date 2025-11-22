import React from "react";

type NormalParagraphProps = {
  p: string;
};

const NormalParagraph: React.FC<NormalParagraphProps> = ({ p }) => {
  return (
    <div>
      <p className="text-gray-600">{p}</p>
    </div>
  );
};

export default NormalParagraph;
