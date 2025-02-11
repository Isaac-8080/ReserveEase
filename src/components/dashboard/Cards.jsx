
import React from 'react';

function Card({ title, content, icon }) {
  return (
    <div className="card shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 bg-gradient-to-b from-black-400 to-indigo-600 h-60">
      <div className="flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-center mb-2 text-white">{title}</h2>
      <p className="text-4xl font-semibold text-center text-white">{content}</p>
    </div>
  );
}

export default Card;
