import React, { useEffect, useState } from "react";

import { GiNotebook } from "react-icons/gi";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import { peticionApiPost, crearUser } from "./functionsFetch";

const ListaTareas = () => {
  const [valueInput, setValueInput] = useState("");
  const [data, setData] = useState("");
  const [user, setUser] = useState("vtorres");

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

  const deleteTarea = async (id) => {
    await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        setData(
          data.filter((tarea) => {
            return tarea.id !== id;
          })
        );
      } else {
        return;
      }
    });
  };

  const deleteUser = async (user) => {
    await fetch(`https://playground.4geeks.com/todo/users/${user}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        crearUser(user);
      } else {
        return;
      }
    });
  };

  // eliminar la tarea seleccionada
  const deleteTask = (id) => {
    deleteTarea(id);
  };

  useEffect(() => {
    // creo usuario llamado vtorres
    //crearUser(user);

    //llamada get
    fetch(`https://playground.4geeks.com/todo/users/${user}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hay un error en la peticion");
        }

        return response.json();
      })
      .then((data) => setData(data.todos))
      .catch((error) => console.log("Error", error));
  }, [data]);

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
