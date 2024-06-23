import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

const Tarea = ({ deleteTask, tarea, index }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {tarea}
      {isHover && <GrClose onClick={() => deleteTask(index)} />}
    </div>
  );
};

export default Tarea;
