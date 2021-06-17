import React from "react";

const FocusApp = () => {
  const [text, setText] = React.useState("");
  // Hacer referencia a un elemento para interactuar con el DOM
  // Cada vez que se debe interactuar con un evento del dom se utiliza useRef()
  const inputRef = React.useRef();

  const handleFocus = () => {
    /*
        Es un objeto donde la referencia se guarda en la propiedad Current
    */
    const input = inputRef.current;
    input.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusApp;
