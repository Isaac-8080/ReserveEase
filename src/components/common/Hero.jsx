import React from "react";
import PropTypes from "prop-types";

function Hero({ title, subtitle, className, image }) {
  return (
    <div
      className={`hero min-h-screen bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          {subtitle && <p className="py-6">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.string,
};

export default Hero;


