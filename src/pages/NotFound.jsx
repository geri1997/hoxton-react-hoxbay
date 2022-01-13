import React from "react";

const NotFound = () => {
  const center = {
    display: "grid",
    "place-items": "center",
    gap: "3rem",
  };
  return (
    <div style={center}>
      <h1 style={{ textAlign: "center" }}>You're lost</h1>
      <img
        style={{ width: "50%" }}
        src="https://media3.giphy.com/media/hEc4k5pN17GZq/giphy.gif?cid=ecf05e47c8u0r0otaglfx1k9881soa9txl0qfsz9dmkd5hgb&rid=giphy.gif&ct=g"
      />
    </div>
  );
};

export default NotFound;
