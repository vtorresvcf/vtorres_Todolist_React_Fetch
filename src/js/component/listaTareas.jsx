import React, { useState } from "react";

import { GiNotebook } from "react-icons/gi";
import Formulario from "./Formulario";
import Tarea from "./Tarea";

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
    <div className="container">
      <h1>
        Lista de tareas <GiNotebook />
      </h1>

      <Formulario
        handleSubmit={handleSubmit}
        changeValueInput={changeValueInput}
        valueInput={valueInput}
      />

      {tareas.length > 0 ? (
        <ul className="list-group list-group-flush">
          {tareas.map((tarea, index) => (
            <li className="list-group-item" key={index}>
              <Tarea deleteTask={deleteTask} tarea={tarea} />
            </li>
          ))}
        </ul>
      ) : (
        <h2>No hay tareas</h2>
      )}
    </div>
  );
};

export default ListaTareas;
