import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpandText, setExpandText] = useState(false);

  if (children.length <= 100) return <p>{children}</p>;

  const text = isExpandText ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}...
      <button onClick={() => setExpandText(!isExpandText)}>
        {isExpandText ? "Close text" : "Expand text"}
      </button>
    </p>
  );
};

export default ExpandableText;
