import React from "react";

const Form = ({ children, onSubmit, className, title }) => {
  return (
    <div className={`card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ${className}`}>
      {title && <div className="card-title py-5 text-center text-2xl">{title}</div>}
      <form className="card-body" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default Form;
