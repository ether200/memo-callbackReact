import React from "react";

const RenderApp = () => {
  const [text, setText] = React.useState("");

  // Valor inicial a la propiedad current, variable mutable
  const rendersRef = React.useRef(1);

  React.useEffect(() => {
    rendersRef.current++;
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>Renders: {rendersRef.current}</h1>
    </div>
  );
};

export default RenderApp;
