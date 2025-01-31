import React from "react";

function Input({ type, id, placeholder, value, onChange, label }) {
  return (
    <div className="form-control w-full">
      {label && <label className="label">
        <span className="label-text">{label}</span>
      </label>}
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  );
}

export default Input;
