import React, { useState } from "react";
const grades = ["A", "B", "C", "D", "E", "F"];

const Form = (props) => {
  const [unit, setUnit] = useState(1);
  const [courseSub, setCourse] = useState("");
  const [grade, setGrade] = useState("A");
  // const [totalScore, setTotal] = useState(100);

  const calculateTotal = (score) => {
    if (score === "A") {
      return 5;
    } else if (score === "B") {
      return 4;
    } else if (score === "C") {
      return 3;
    } else if (score === "D") {
      return 2;
    } else if (score === "E") {
      return 1;
    } else {
      return 0;
    }
  };
  // const calculateTotal = (score) => {
  //   if (score >= 70) {
  //     return 5;
  //   } else if (score >= 60) {
  //     return 4;
  //   } else if (score >= 50) {
  //     return 3;
  //   } else if (score >= 45) {
  //     return 2;
  //   } else if (score >= 40) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // };
  function handleSUbmit(e) {
    e.preventDefault();

    if (!courseSub) return;
    const total = calculateTotal(grade);
    const course = courseSub.toUpperCase();
    const newItem = {
      course,
      unit,
      total,
      unitTotal: unit * total,
      id: Date.now(),
    };

    console.log(newItem, typeof total);
    props.onAddItem(newItem);
    setUnit(1);
    setCourse("");
    setGrade("A");
  }

  return (
    <form className="add-form" onSubmit={handleSUbmit}>
      <h3 className="form-head">Let's see that nice GPA</h3>
      <div className="form-details">
        <input
          type="text"
          placeholder="Enter Course Code "
          value={courseSub}
          onChange={(e) => setCourse(e.target.value)}
        />
        <div className="unit">
          <p>Unit Load:</p>
          <select
            value={unit}
            onChange={(e) => setUnit(Number(e.target.value))}
          >
            {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="unit">
          <p>Grade:</p>
          <select value={grade} onChange={(e) => setGrade(e.target.value)}>
            {grades.map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        {/* <input
          value={totalScore}
          type="number"
          max={100}
          placeholder="Enter Course Score"
          onChange={(e) => setTotal(Number(e.target.value))}
        /> */}
        <button className="add">Add</button>
      </div>
    </form>
  );
};

export default Form;
