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
    if (valueInput.length > 0) {
      setTareas([...tareas, valueInput]);
      setValueInput("");
    }
  };

  // eliminar la tarea seleccionada
  const deleteTask = (index) => {
    const tareaActualizada = tareas.filter((tarea, index) => index !== index);
    setTareas(tareaActualizada);
  };
  return (
    <div className="container shadow p-3 mb-5 bg-white rounded">
      <h1 className="text-center">
        Lista de tareas <GiNotebook />
      </h1>
      <ul className="list-group list-group-flush "></ul>
      <Formulario
        handleSubmit={handleSubmit}
        changeValueInput={changeValueInput}
        valueInput={valueInput}
      />

      {tareas.length > 0 ? (
        <>
          {tareas.map((tarea, index) => (
            <li className="list-group-item lista" key={index}>
              <Tarea deleteTask={deleteTask} tarea={tarea} />
            </li>
          ))}
        </>
      ) : (
        <li className="list-group-item lista text-danger">No hay tareas</li>
      )}
      <div className="total-tareas">
        <span>Nº de tareas : {tareas.length}</span>
      </div>
    </div>
  );
};

export default ListaTareas;
