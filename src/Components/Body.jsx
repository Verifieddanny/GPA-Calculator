import React, { useState } from "react";

const Body = (props) => {
  const [gpa, setGpa] = useState(null);
  const totalScore = props.items.reduce(
    (acc, current) => acc + current.total,
    0
  );
  const total = props.items.reduce(
    (acc, current) => acc + current.unitTotal,
    0
  );
  const totalUnit = props.items.reduce((acc, current) => acc + current.unit, 0);
  const handleGPA = () => {
    const GPA = Number(total) / Number(totalUnit);
    setGpa(GPA.toFixed(2));
  };
  const showGpaResults = gpa !== null;
  return (
    <>
      <div className="courseDisplay">
        <div className="CourseTable">
          <div className="CourseTitle">
            <b className="title">Course Code</b>

            {props.items.map((item) => (
              <p className="item" key={item.id}>
                {item.course}
              </p>
            ))}
            <b>Total</b>
          </div>
          <div className="CourseTitle">
            <b className="title">Unit Load</b>

            {props.items.map((item) => (
              <p className="item" key={item.id}>
                {item.unit}
              </p>
            ))}
            <b>{totalUnit}</b>
          </div>
          <div className="CourseTitle">
            <b className="title">Score</b>

            {props.items.map((item) => (
              <p className="item" key={item.id}>
                {item.total}
              </p>
            ))}
            <b>{totalScore}</b>
          </div>
          <div className="CourseTitle">
            <b className="title">Total</b>

            {props.items.map((item) => (
              <p className="item" key={item.id}>
                {item.unitTotal}
              </p>
            ))}
            <b>{total}</b>
          </div>
        </div>
      </div>
      <button className="calc" onClick={handleGPA}>
        Calculate GPA
      </button>
      <button className="calc clear" onClick={props.clear}>
        Clear
      </button>
      {showGpaResults && (
        <div className="courseDisplay GPA">
          <p className="title">
            Your GPA is <b>{gpa}</b>
          </p>
          <p>
            {gpa >= 4.5
              ? "First Class Honours"
              : gpa >= 3.5
              ? "Second Class Upper"
              : gpa >= 2.4
              ? "Second Class Lower"
              : gpa >= 1.5
              ? "Third Class"
              : gpa >= 1
              ? "pass"
              : "fail"}
          </p>
        </div>
      )}
    </>
  );
};

export default Body;
