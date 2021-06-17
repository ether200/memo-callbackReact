import React from "react";
import Card from "./Card";

const LoadingApp = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Card />}
    </div>
  );
};

export default LoadingApp;
