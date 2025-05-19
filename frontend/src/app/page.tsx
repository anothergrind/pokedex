"use client";

import Card from "./components/Card";
import Navbar from "./components/navbar";
import React from "react";
import './globals.css';

// defining the properties of a Pokemon
type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
};

export default async function Page(){
  // randomizing the pokemon pulled from the API
  const randomizer = Math.floor(Math.random() * 1025) + 1;
  const randomizer2  = Math.floor(Math.random() * 1025) + 1;

  // fetching data from API 
  const first_data = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomizer}`)
  const second = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomizer2}`)
  const pokemon: Pokemon = await first_data.json()
  const pokemon2: Pokemon = await second.json()

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <h1 className="text-4x1 font-bold text-red-600"> Tailwind Test </h1>
      <div className="flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-8">Random Generated Pokemon</h1>
        <div className="flex flex-wrap justify-center gap-8">
          <Card
            card={{
              name: pokemon.name,
              image: pokemon.sprites.front_default,
              types: pokemon.types.map((t) => t.type.name),
              onLike: () => {},
              onDislike: () => {},
            }}
          />
          <Card
            card={{
              name: pokemon2.name,
              image: pokemon2.sprites.front_default,
              types: pokemon2.types.map((t) => t.type.name),
              onLike: () => {},
              onDislike: () => {},
            }}
          />
        </div>
      </div>
    </div>
  );
}