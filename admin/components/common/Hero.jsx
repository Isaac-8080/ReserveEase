import React from "react";

function Hero({ title, subtitle, className }) {
  return (
    <div className={`hero ${className}`}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          {subtitle && <p className="py-6">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

export default Hero;