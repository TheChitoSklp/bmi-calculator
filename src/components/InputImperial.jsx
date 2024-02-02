import "./InputImperial.css";
export const InputImperial = ({
  heightFT,
  heightIN,
  weightST,
  weightLBS,
  handleHeightFTChange,
  handleHeightINChange,
  handleWeightSTChange,
  handleWeightLBSChange,
}) => {
  return (
    <div className="imperial-container">
      <div>
        <label>
          Height:
          <div className="input-pair-container">
            <div className="input-with-unit">
              <input
                className="input-estilizado"
                type="text"
                value={heightFT}
                onChange={handleHeightFTChange}
              />
              <span className="unit">ft</span>
            </div>
            <div className="input-with-unit">
              <input
                className="input-estilizado"
                type="text"
                value={heightIN}
                onChange={handleHeightINChange}
              />
              <span className="unit">in</span>
            </div>
          </div>
        </label>
      </div>

      <div>
        <label>
          Weight:
          <div className="input-pair-container">
            <div className="input-with-unit">
              <input
                className="input-estilizado"
                type="text"
                value={weightST}
                onChange={handleWeightSTChange}
              />
              <span className="unit">st</span>
            </div>
            <div className="input-with-unit">
              <input
                className="input-estilizado"
                type="text"
                value={weightLBS}
                onChange={handleWeightLBSChange}
              />
              <span className="unit">lbs</span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
