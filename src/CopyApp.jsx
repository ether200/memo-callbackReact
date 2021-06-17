import React from "react";

const CopyApp = () => {
  const [text, setText] = React.useState("Hola!");
  const [isCopied, setIsCopied] = React.useState(false);
  const inputRef = React.useRef();

  function handleClick() {
    const input = inputRef.current;
    // Gracias a la referencia tenemos acceso a los metodos que provee el dom
    input.select();
    document.execCommand("copy");

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Copy</button>
      {isCopied && <h1>Copied</h1>}
    </div>
  );
};

export default CopyApp;
