import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const center = {
    display: "grid",
  placeItems: "center",
    gap: "3rem",
  };
  document.title='Not found - Hoxbay'
  return (
    <div style={center}>
      <h1 style={{ textAlign: "center" }}>You're lost</h1>
      <img
        style={{ width: "50%" }}
        src="https://media3.giphy.com/media/hEc4k5pN17GZq/giphy.gif?cid=ecf05e47c8u0r0otaglfx1k9881soa9txl0qfsz9dmkd5hgb&rid=giphy.gif&ct=g"
      />
      <h3>
        <Link to="/">Go home</Link>
      </h3>{" "}
    </div>
  );
};

export default NotFound;
