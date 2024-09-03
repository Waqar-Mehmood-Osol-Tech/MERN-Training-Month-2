import React from 'react';

function Card({ name, src, title, link }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={src}
        alt={title}
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{name}</p>
       <a href={link}>
        <button>
            Watch Now
        </button>
       </a>
      </div>
    </div>
  );
}

export default Card;
