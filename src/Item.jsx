import React, { useEffect, memo } from "react";

/*
  Si utilizamos memo, al agregar un nuevo user, solo estaria renderizando el nuevo usuario, ya que los anteriores serian iguales
*/

const Item = memo(({ user, handleDelete }) => {
  useEffect(() => {
    console.log("Item Render");
  });

  return (
    <li>
      {user.name}
      <button onClick={() => handleDelete(user.id)}>Delete</button>
    </li>
  );
});

export default Item;
