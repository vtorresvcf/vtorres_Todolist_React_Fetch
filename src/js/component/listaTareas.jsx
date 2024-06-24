import React, { useEffect, useState } from "react";

import { GiNotebook } from "react-icons/gi";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import { peticionApiPost } from "./functionsFetch";

const ListaTareas = () => {
  const [valueInput, setValueInput] = useState("");
  const [data, setData] = useState("");
  const [idDelete, setIdDelete] = useState("");

  // Registra el valor del input
  const changeValueInput = (event) => {
    setValueInput(event.target.value);
  };

  // controlar el envio de formulario y agregar la tarea
  const handleSubmit = (event) => {
    event.preventDefault();
    if (valueInput.length > 0) {
      peticionApiPost(valueInput);
      setValueInput("");
    }
  };

  // eliminar la tarea seleccionada
  const deleteTask = (id) => {
    console.log(id);
    //peticionApiDelete(id);
  };

  // Eliminar tarea fetch

  const peticionApiDelete = async (dato) => {
    const response = fetch(
      `https://playground.4geeks.com/todo/users/vtorres/todos/${dato.id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log("eliminado correctamente");
      //const idFilter = data.filter((dato) => dato.id !== id);
      //console.log(idFilter);
      //setData(idFilter);
    } else {
      console.error("Error al eliminar el producto:", response.statusText);
    }
  };

  useEffect(() => {
    fetch("https://playground.4geeks.com/todo/users/vtorres")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hay un error en la peticion");
        }

        return response.json();
      })
      .then((data) => setData(data.todos))
      .catch((error) => console.log("Error", error));
  }, [valueInput]);

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

      {data.length > 0 ? (
        <>
          {data.map((dato) => (
            <li className="list-group-item lista" key={dato.id}>
              <Tarea deleteTask={deleteTask} dato={dato} />
            </li>
          ))}
        </>
      ) : (
        <li className="list-group-item lista text-danger">No hay tareas</li>
      )}
      <div className="total-tareas">
        <span>Nº de tareas : {data.length}</span>
      </div>
    </div>
  );
};

export default ListaTareas;
