"use client";

import React, { useState } from "react";
import CardComponent from "./components/CardComponent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./styles/page.css";

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

async function fetchRandomPokemon(): Promise<Pokemon> {
  const randomId = Math.floor(Math.random() * 1025) + 1;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  return res.json();
}

export default function Page() {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  // Fetch 4 random Pokemon
  const generatePokemons = async () => {
    const results = await Promise.all([
      fetchRandomPokemon(),
      fetchRandomPokemon(),
      fetchRandomPokemon(),
      fetchRandomPokemon(),
    ]);
    setPokemons(results);
  };

  // Fetch on mount
  React.useEffect(() => {
    generatePokemons();
  }, []);

  return (
    <Box className="page-root">
      <Container maxWidth="lg" className="page-container">
        <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom>
          Dashboard
        </Typography>
        <Paper elevation={0} className="page-paper">
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h5" fontWeight="medium" gutterBottom>
              Random Generated Pokemon
            </Typography>
            <Button variant="contained" color="primary" onClick={generatePokemons}>
              Generate
            </Button>
          </Stack>
          <Stack direction="row" spacing={4} className="page-stack">
            {pokemons.map((pokemon, idx) => (
              <CardComponent
                key={pokemon.name + idx}
                card={{
                  name: pokemon.name,
                  image: pokemon.sprites.front_default,
                  types: pokemon.types.map((t) => t.type.name),
                  onLike: () => {},
                  onDislike: () => {},
                }}
              />
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}