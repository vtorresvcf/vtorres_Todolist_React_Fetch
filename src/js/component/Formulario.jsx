import React from "react";

const Formulario = ({ handleSubmit, valueInput, changeValueInput }) => {
  return (
    <li className="list-group-item">
      <form onSubmit={handleSubmit}>
        <input
          className="lista"
          type="text"
          placeholder="Escriba aquí las tareas para agregar"
          value={valueInput}
          onChange={changeValueInput}
        ></input>
      </form>
    </li>
  );
};

export default Formulario;
