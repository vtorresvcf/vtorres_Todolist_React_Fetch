import React, { useState } from "react";
import { useId } from "react";

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [valueInput, setValueInput] = useState("");

  // Registra el valor del input
  const changeValueInput = (event) => {
    setValueInput(event.target.value);
  };

  // controlar el envio de formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    setTareas([...tareas, valueInput]);
    setValueInput("");
  };
  //Agregar tarea

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
      <h1>Lista de tareas</h1>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
