import React from "react";

function Input({ id, label, type, placeholder, handleChange, value, message }) {
  return (
    <div class="form-control">
      <label for={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        value={value ? value : null}
        required
      />
      {message?.length > 0 && <small>{message}</small>}
    </div>
  );
}

export default Input;
