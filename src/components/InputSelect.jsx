import "./InputSelect.css";
export const InputSelect = ({ handleSeleccion, seleccion }) => {
  return (
    <div className="select-container">
      <label className="select-label">
        <input
          className="input-radio"
          type="radio"
          value="Metric"
          checked={seleccion === "Metric"}
          onChange={() => handleSeleccion("Metric")}
        />
        <span className="Metric-label">Metric</span>
      </label>

      <label className="select-label">
        <input
          className="input-radio"
          type="radio"
          value="Imperial"
          checked={seleccion === "Imperial"}
          onChange={() => handleSeleccion("Imperial")}
        />
        <span className="Imperial-label">Imperial</span>
      </label>
    </div>
  );
};
