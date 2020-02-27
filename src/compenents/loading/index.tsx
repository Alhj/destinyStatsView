import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loadingDiv">
      <h1>Loading</h1>
      <h1 className="dots1">.</h1>
      <h1 className="dots2">.</h1>
      <h1 className="dots3">.</h1>
    </div>
  );
};

export default Loading;
