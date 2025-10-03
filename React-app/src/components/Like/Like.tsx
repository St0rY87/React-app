import { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLike, setIsLike] = useState(false);

  function toggleLike() {
    setIsLike((isLike) => !isLike);
    onClick();
  }
  return (
    <span onClick={toggleLike} style={{ cursor: "pointer" }}>
      {isLike ? (
        <IoMdHeart size={40} color="red"></IoMdHeart>
      ) : (
        <IoMdHeartEmpty size={40} color="red"></IoMdHeartEmpty>
      )}
    </span>
  );
};

export default Like;
