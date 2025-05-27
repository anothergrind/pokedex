"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "./../../lib/supabase";
import CardComponent from "./../../components/CardComponent";
import "../../styles/LikedPokemon.css";

type Pokemon = {
  id: string;
  pokemon_name: string;
  image_url: string;
  types: string[];
};

export default function Page() {
  const [likedPokemon, setLikedPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchLiked = async () => {
      const { data, error } = await supabase
        .from("pokemon_votes")
        .select("*")
        .eq("liked", true);

      if (data) {
        setLikedPokemon(data);
      }
    };

    fetchLiked();
  }, []);

  return (
    <div className="liked-pokemon">
      <h1>Liked Pokémon</h1>
      <div className="card-grid">
        {likedPokemon.map((poke) => (
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
