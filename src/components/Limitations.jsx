import "./Limitations.css";
import gender from "/icon-gender.svg";
import age from "/icon-age.svg";
import muscle from "/icon-muscle.svg";
import pregnancy from "/icon-pregnancy.svg";
import race from "/icon-race.svg";
import paternRight from "/pattern-curved-line-right.svg";

export const Limitations = () => {
  return (
    <section className="section-limitations">
      <article className="limitations-article">
        <h3>Limitations of BMI</h3>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is not suited
          for every person. Specific groups should carefully consider their BMI outcomes,
          and in certain cases, the measurement may not be beneficial to use.
        </p>
      </article>
      <article className="gender-article">
        <div className="icon-img-container">
          <img src={gender} alt="gender" />
          <span>Gender</span>
        </div>
        <p>
          The development and body fat composition of girls and boys vary with age.
          Consequently, a child's age and gender are considered when evaluating their BMI.
        </p>
      </article>
      <div className="icon-hair">
        <img className="pattern-rigth" src={paternRight} alt="icon-hair" />
      </div>
      <article className="age-article">
        <div className="icon-img-container">
          <img src={age} alt="age" />
          <span>Age</span>
        </div>
        <p>
          In aging individuals, increased body fat and muscle loss may cause BMI to
          underestimate body fat content.
        </p>
      </article>
      <article className="muscle-article">
        <div className="icon-img-container">
          <img src={muscle} alt="muscle" />
          <span>Muscle</span>
        </div>
        <p>
          BMI may misclassify muscular individuals as overweight or obese, as it doesn't
          differentiate muscle from fat
        </p>
      </article>
      <article className="pregnancy-article">
        <div className="icon-img-container">
          <img src={pregnancy} alt="pregnancy" />
          <span>Pregnancy</span>
        </div>
        <p>
          Expectant mothers experience weight gain due to their growing baby. Maintaining
          a healthy pre-pregnancy BMI is advisable to minimise health risks for both
          mother and child.
        </p>
      </article>
      <article className="race-article">
        <div className="icon-img-container">
          <img src={race} alt="race" />
          <span>Race</span>
        </div>
        <p>
          Certain health concerns may affect individuals of some Black and Asian origins
          at lower BMIs than others. To learn more, it is advised to discuss this with
          your GP or practice nurse.
        </p>
      </article>
    </section>
  );
};
