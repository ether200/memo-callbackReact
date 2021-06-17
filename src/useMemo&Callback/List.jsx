import React, { useEffect, memo } from "react";
import Item from "./Item";

/*memo sirve para memorizar las propiedades de un componente, cuando sean igual el componente no deberia de renderizarse otra vez al no renderizarse la lista, tampoco lo haran los child components
 */

/*
  Memoriza un componente
  Vuelve a memorizar al cambiar las props
  Evita Re-renders
*/

/*
  SE RECOMIENDA: utilizar memo cuando tenemos listas con gran cantidad de elementos, o los componentes ejecutan llamadas a la api.
  NO SE RECOMIENDO UTILIZAR memo en otros casos, dejar DEFAULT
*/

const List = memo(({ users, handleDelete }) => {
  useEffect(() => {
    console.log("List Render");
  });

  return (
    <ul>
      {users.map((user) => (
        <Item user={user} key={user.id} handleDelete={handleDelete} />
      ))}
    </ul>
  );
});

export default List;
