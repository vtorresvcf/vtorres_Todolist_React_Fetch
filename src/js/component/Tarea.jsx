import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

const Tarea = ({ deleteTask, dato, index }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="d-flex justify-content-between"
    >
      {dato.label}
      {isHover && <GrClose onClick={() => deleteTask(index)} />}
    </div>
  );
};

export default Tarea;
