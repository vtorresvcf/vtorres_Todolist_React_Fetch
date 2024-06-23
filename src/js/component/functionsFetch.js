export const peticionApiPost = (texto) => {
  fetch("https://playground.4geeks.com/todo/todos/vtorres", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      label: texto,
      is_done: false,
    }),
  }).then((data) => {
    console.log(data);
  });
};
