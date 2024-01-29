import React, { useState, useEffect } from "react";
import "./Details.css";
import { InputSelect } from "./InputSelect";
import { InputHW } from "./InputHW";
import { Bmi } from "./Bmi";
import { InputImperial } from "./InputImperial";
import { calcularBMI_Imperial, calcularBMI_Metrico } from "../helper/calculateBMI";

export const Details = () => {
  const [seleccion, setSeleccion] = useState("Metric");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [heightFT, setHeightFT] = useState(0);
  const [heightIN, setHeightIN] = useState(0);
  const [weightST, setWeightST] = useState(0);
  const [weightLBS, setWeightLBS] = useState(0);
  const [bmiResult, setBmiResult] = useState(null);

  const handleSeleccion = (opcion) => {
    setSeleccion(opcion);
  };

  const calculateBMI = () => {
    if (seleccion === "Metric") {
      const bmi = calcularBMI_Metrico(weight, height);
      setBmiResult(bmi);
    } else {
      const bmi = calcularBMI_Imperial(weightST, weightLBS, heightFT, heightIN);
      setBmiResult(bmi);
    }
  };

  useEffect(() => {
    // Llama a la función de cálculo cuando se actualizan los datos
    calculateBMI();
  }, [height, weight, heightFT, heightIN, weightST, weightLBS, seleccion]);

  const handleHeightFTChange = (event) => {
    setHeightFT(event.target.value);
  };

  const handleHeightINChange = (event) => {
    setHeightIN(event.target.value);
  };

  const handleWeightSTChange = (event) => {
    setWeightST(event.target.value);
  };

  const handleWeightLBSChange = (event) => {
    setWeightLBS(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  return (
    <section className="first-section-grid">
      <div className="background-blue"></div>
      <div className="title-container">
        <h2>Body Mass Index Calculator</h2>
        <p>
          Better understand your weight in relation to your height using our body mass
          index (BMI) calculator. While BMI is not the sole determinant of a healthy
          weight, it offers a valuable starting point to evaluate your overall health and
          well-being.
        </p>
      </div>
      <div className="details-container">
        <h2>Enter your details below</h2>
        <InputSelect
          seleccion={seleccion}
          handleSeleccion={handleSeleccion}
          setSeleccion={setSeleccion}
        />
        {seleccion === "Metric" ? (
          <InputHW
            height={height}
            weight={weight}
            handleHeightChange={handleHeightChange}
            handleWeightChange={handleWeightChange}
          />
        ) : (
          <InputImperial
            heightFT={heightFT}
            heightIN={heightIN}
            weightST={weightST}
            weightLBS={weightLBS}
            handleHeightFTChange={handleHeightFTChange}
            handleHeightINChange={handleHeightINChange}
            handleWeightSTChange={handleWeightSTChange}
            handleWeightLBSChange={handleWeightLBSChange}
          />
        )}

        <Bmi bmiResult={bmiResult} />
      </div>
    </section>
  );
};
