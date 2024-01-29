import React from "react";
import "./InputHW.css";

export const InputHW = ({ height, weight, handleHeightChange, handleWeightChange }) => {
  return (
    <div className="contenedor">
      <div className="input-container">
        <label>Height:</label>
        <div className="input-with-unit">
          <input
            className="inputEstilizado"
            type="text"
            value={height}
            onChange={handleHeightChange}
          />
          <span className="unit">cm</span>
        </div>
      </div>

      <div className="input-container">
        <label>Weight:</label>
        <div className="input-with-unit">
          <input
            className="inputEstilizado"
            type="text"
            value={weight}
            onChange={handleWeightChange}
          />
          <span className="unit">kg</span>
        </div>
      </div>
    </div>
  );
};
