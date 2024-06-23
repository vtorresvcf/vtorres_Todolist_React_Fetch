import React from "react";

const Formulario = ({ handleSubmit, valueInput, changeValueInput }) => {
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
    </div>
  );
};

export default Formulario;
