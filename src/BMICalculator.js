import React, { useState } from "react";

function BMICalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(0);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const bmiValue = (weight / (height * height)) * 703;
      setBMI(bmiValue.toFixed(2));
    }
  
    return (
      <div className="container">
         <h2>BMI Calculator</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Weight (in pounds):
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
          </label>
          <label>
            Height (in inches):
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
          </label>
          <button type="submit">Calculate</button>
        </form>
        { bmi !== 0 && <p>Your BMI is: {bmi}</p> }
      </div>
    );
  }
export default BMICalculator;