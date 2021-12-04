import React from "react";
import "./style.css";
const Popup = ({ data, handleClose }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <h2>
          <b>Student Details</b>
        </h2>
        <ul>
          {Object.keys(data).map((item) => (
            <li>
              <b>{item.toLocaleUpperCase()}</b> : {data[item]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Popup;
