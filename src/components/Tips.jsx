import exercise from "/icon-exercise.svg";
import sleep from "/icon-sleep.svg";
import eating from "/icon-eating.svg";
import "./Tips.css";
export const Tips = () => {
  return (
    <section className="section-tips">
      <div className="back-tips"></div>
      <div className="eating-container">
        <img src={eating} alt="" />
        <h4>Healthy eating</h4>
        <p>
          Healthy eating promotes weight control, disease prevention, better digestion,
          immunity, mental clarity, and mood.
        </p>
      </div>
      <div className="exercise-container">
        <img src={exercise} alt="" />
        <h4>Regular exercise</h4>
        <p>
          Exercise improves fitness, aids weight control, elevates mood, and reduces
          disease risk, fostering wellness and longevity.
        </p>
      </div>
      <div className="sleep-container">
        <img src={sleep} alt="" />
        <h4>Adequate sleep</h4>
        <p>
          Sleep enhances mental clarity, emotional stability, and physical wellness,
          promoting overall restoration and rejuvenation.
        </p>
      </div>
    </section>
  );
};
