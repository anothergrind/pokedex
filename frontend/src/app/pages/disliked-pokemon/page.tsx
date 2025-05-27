"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "./../../lib/supabase";
import CardComponent from "./../../components/CardComponent";
import "../../styles/DislikedPokemon.css";

type Pokemon = {
  id: string;
  pokemon_name: string;
  image_url: string;
  types: string[];
};

export default function Page() {
  const [dislikedPokemon, setDislikedPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchDisliked = async () => {
      const { data, error } = await supabase
        .from("pokemon_votes")
        .select("*")
        .eq("liked", false);

      if (data) {
        setDislikedPokemon(data);
      }
    };

    fetchDisliked();
  }, []);

  return (
    <div className="disliked-pokemon">
      <h1>Disliked Pokémon</h1>
      <div className="card-grid">
        {dislikedPokemon.map((poke) => (
          <CardComponent
            key={poke.id}
            card={{
              name: poke.pokemon_name,
              image: poke.image_url,
              types: poke.types,
            }}
          />
        ))}
      </div>
    </div>
  );
}
