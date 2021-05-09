import React, { useState, useEffect, useMemo, useCallback } from "react";
import List from "./List";

const initialUsers = [
  { id: 1, name: "Rukia " },
  { id: 2, name: "Soi Fon" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  /*
    useMemo almacena el valor que retorna una funcion y se ejecutara segun el arreglo de dependecias con el fin de crear PROPS computadas
 */

  /*
      Memoriza un valor calculado
      Para propiedades computadas
      Para procesos pesados
  */

  /*
    El problema surge que al re renderizar el componente, esta ejecutara siempre la funcion de filtrado, para solucionarlo utilizamos useMemo, y declaramos que solo se vuelva a ejecutar cuando search o users cambien
  */

  /*
      Solo utilizarlos cuando el proceso es demasiado pesado
  */
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        // console.log("Filter process");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),

    [search, users]
  );

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  /*
    useCallback guardara la definicion de una funcion y la memorizara para que este no se cree nuevamente al momento de re renderizar el componente
  */

  /*
    Memoriza una funcion, para no volver a definirla en cada render
    Usarlo siempre que se pase una funcion como argumento de un efecto
    Usarlo siempre que se pase una funcion por props a un COMPONENTE MEMORIZADO
  */

  const handleDelete = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id !== userId));
    },
    [users]
  );

  useEffect(() => {
    console.log("App Render");
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
