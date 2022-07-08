import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Heart() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
  };

  return (
    <div className="favorites">
      <FontAwesomeIcon
        icon={faHeart}
        size={"lg"}
        style={{
          color: isActive ? "#c7027c" : "lightgrey",
        }}
        onClick={handleClick}
      />
    </div>
  );
}
