"use client";
import React from "react";

// defining the properties of a Card
type CardProps = {
  name: string;
  image: string;
  types: string[];
  onLike: () => void;
  onDislike: () => void;
};

export default function Card({ card }: { card: CardProps }) {
  return (
    <div className="bg-white border rounded-xl shadow-md p-6 w-72 flex flex-col items-center hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold capitalize mb-3">{card.name}</h2>
      <img
        src={card.image || "/placeholder.png"}
        alt={card.name}
        className="w-32 h-32 object-contain mb-4"
      />
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {card.types.map((type, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize"
          >
            {type}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <button
          onClick={card.onDislike}
          className="text-red-500 hover:scale-110 transition-transform font-semibold"
        >
          Dislike
        </button>
        <button
          onClick={card.onLike}
          className="text-green-500 hover:scale-110 transition-transform font-semibold"
        >
          Like
        </button>
      </div>
    </div>
  );
}
