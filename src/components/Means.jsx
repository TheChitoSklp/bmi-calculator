import React from "react";
import imageMan from "/man.png";
import parternCurve from "/pattern-curved-line-left.svg";
import "./Means.css";
export const Means = () => {
  return (
    <section className="section-means">
      <img className="patern-curve" src={parternCurve} alt="" />
      <div className="image-container">
        <div className="back-img">
          <img className="img-man" src={imageMan} alt="" />
        </div>
      </div>

      <div className="text-container">
        <h3 className="title-results">What your BMI result means</h3>
        <p className="text-recomend">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a
          healthy weight may lower your chances of experiencing health issues later on,
          such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat
          and sugar content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily for five
          days a week.
        </p>
      </div>
    </section>
  );
};
