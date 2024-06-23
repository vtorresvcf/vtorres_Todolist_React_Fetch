import React, { useId, useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [valueInput, setValueInput] = useState("");

  // Registra el valor del input
  const changeValueInput = (event) => {
    setValueInput(event.target.value);
  };

  // controlar el envio de formulario y agregar la tarea
  const handleSubmit = (event) => {
    event.preventDefault();

    setTareas([...tareas, valueInput]);
    setValueInput("");
  };

  // eliminar la tarea seleccionada
  const deleteTask = (index) => {
    const tareaActualizada = tareas.filter((tarea, index) => index !== index);
    setTareas(tareaActualizada);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escriba"
          value={valueInput}
          onChange={changeValueInput}
        ></input>
      </form>

      <h1>
        Lista de tareas <GiNotebook />
      </h1>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <GrClose onClick={() => deleteTask(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
