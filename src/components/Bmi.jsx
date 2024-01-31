import "./Bmi.css";
export const Bmi = ({ bmiResult }) => {
  return (
    <div className="bmi-container">
      <div className="h3-bmi-container">
        <h3>Your BMI is...</h3>
        <span>{bmiResult ? bmiResult : 0}</span>
      </div>
      <div className="p-container">
        <p>
          Our BMI suggests you’re a healthy weight. Your ideal weight is between 63.3kgs -
          85.2kgs.
        </p>
      </div>
    </div>
  );
};
