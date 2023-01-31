// import React, { useState } from "react";

// function BodyFatPercentageCalculator() {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("male");
//   const [result, setResult] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (gender === "male") {
//       setResult(
//         (495 /
//           (1.0324 -
//             0.19077 * Math.log10(weight * height / 39.37) +
//             0.15456 * Math.log10(age))) -
//           450
//       );
//     } else {
//       setResult(
//         (495 /
//           (1.29579 -
//             0.35004 * Math.log10(weight * height / 39.37) +
//             0.22100 * Math.log10(age))) -
//           450
//       );
//     }
//   }

//   return (
//     <div className="calculator">
//       <h2>Body Fat Percentage Calculator</h2>
//       <form onSubmit={handleSubmit}>
//           <label htmlFor="weight">Weight (in pounds):</label>
//           <input
//             type="text"
//             id="weight"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}/>
//           <label htmlFor="height">Height (in inches):</label>
//           <input
//             type="text"
//             id="height"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}/>
//           <label htmlFor="age">Age:</label>
//           <input
//             type="text"
//             id="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}/>
//           <label htmlFor="gender">Gender:</label>
//           <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         <button type="submit" className="btn btn-primary">
//           Calculate
//         </button>
//       </form>
//       {result && (<p>Result:{result.toFixed(2)}%</p>)}
//     </div>
//   );
// }

// export default BodyFatPercentageCalculator;

import React, { useState } from "react";

function BodyFatPercentageCalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (gender === "male") {
      setResult(
        (495 /
          (1.0324 -
            0.19077 * Math.log10(weight * height / 39.37) +
            0.15456 * Math.log10(age))) -
          450
      );
    } else {
      setResult(
        (495 /
          (1.29579 -
            0.35004 * Math.log10(weight * height / 39.37) +
            0.22100 * Math.log10(age))) -
          450
      );
    }
  }

  return (
    <div className="container">
      <h2>Body Fat Percentage Calculator</h2>
      <form onSubmit={handleSubmit}>
          <label htmlFor="weight">Weight (in pounds):
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}/>
            </label>
          <label htmlFor="height">Height (in inches):
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}/></label>
          <label htmlFor="age">Age:
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}/></label>
          <label htmlFor="gender">Gender:
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select></label>
        <button type="submit" className="btn btn-primary">
          Calculate
        </button>
      </form>
      <p>{result && (<p>Result:{result.toFixed(2)}%</p>)}</p>
    </div>
  );
}

export default BodyFatPercentageCalculator;
