import React, { useEffect, useState } from "react";

const MessageApp = ({ mensaje }) => {
  const [color, setColor] = useState("");

  //cuando se monta el componente y cuando cambia el mensaje
  useEffect(() => {
    if (mensaje == "Login OK") {
      setColor("alert-success");
    } else {
      setColor("alert-danger");
    }
  }, [mensaje]);

  return (
    <div className={`alert ${color} text-center`} role="alert">
      {mensaje}
    </div>
  );
};

export default MessageApp;
