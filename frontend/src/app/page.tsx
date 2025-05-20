"use client";

import CardComponent from "./components/CardComponent";
import Navbar from "./components/navbar";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

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

export default async function Page() {
  // randomizing the pokemon pulled from the API
  const randomizer = Math.floor(Math.random() * 1025) + 1;
  const randomizer2 = Math.floor(Math.random() * 1025) + 1;

  const first_data = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomizer}`);
  const second = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomizer2}`);
  const pokemon: Pokemon = await first_data.json();
  const pokemon2: Pokemon = await second.json();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.100" }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom>
          Dashboard
        </Typography>
        <Paper elevation={0} sx={{ bgcolor: "transparent", mb: 4 }}>
          <Typography variant="h5" fontWeight="medium" gutterBottom>
            Random Generated Pokemon
          </Typography>
          <Stack direction="row" spacing={4} flexWrap="wrap">
            <CardComponent
              card={{
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                types: pokemon.types.map((t) => t.type.name),
                onLike: () => {},
                onDislike: () => {},
              }}
            />
            <CardComponent
              card={{
                name: pokemon2.name,
                image: pokemon2.sprites.front_default,
                types: pokemon2.types.map((t) => t.type.name),
                onLike: () => {},
                onDislike: () => {},
              }}
            />
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}