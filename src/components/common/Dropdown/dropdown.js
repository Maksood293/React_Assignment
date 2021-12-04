import React from "react";

function Dropdown({ studentDetail, handleChange, message, labelName }) {
  const classes = ["5th", "6th", "7th", "8th", "9th", "10th"];
  return (
    <div class="form-control">
      <label>{labelName}</label>
      <select
        class="form-select"
        aria-label="Default select example"
        name="classes"
        value={studentDetail.classes}
        onChange={(e) => handleChange(e)}
      >
        <option>
          {studentDetail.classes ? studentDetail.classes : "Select Your Class"}
        </option>
        {classes?.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
      {message && <small>{message}</small>}
    </div>
  );
}

export default Dropdown;
