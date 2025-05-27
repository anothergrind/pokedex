"use client";
import React from "react";
import { supabase } from "../lib/supabase";

// Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

import "../styles/CardComponent.css";

// defining the properties of a Card
type CardProps = {
  name: string;
  image: string;
  types: string[];
};

export default function CardComponent({ card }: { card: CardProps }) {
  const handleLike = async () => {
    await supabase.from("pokemon_votes").insert({
      pokemon_name: card.name,
      types: card.types,
      image_url: card.image,
      liked: true,
    });
  };

  const handleDislike = async () => {
    await supabase.from("pokemon_votes").insert({
      pokemon_name: card.name,
      types: card.types,
      image_url: card.image,
      liked: false,
    });
  };

  return (
    <Card className="cardcomponent-card">
      <CardContent className="cardcomponent-cardcontent">
        <Typography gutterBottom variant="h6" component="div" className="cardcomponent-title">
          {card.name}
        </Typography>
        <CardMedia
          component="img"
          image={card.image || "/placeholder.png"}
          alt={card.name}
          className="cardcomponent-media"
        />
        <Stack direction="row" spacing={1} className="cardcomponent-typestack">
          {card.types.map((type, index) => (
            <Chip key={index} label={type} className="cardcomponent-typechip" size="small" />
          ))}
        </Stack>
      </CardContent>
      <CardActions className="cardcomponent-actions">
        <Button onClick={handleDislike} color="error" variant="outlined" size="small">
          Dislike
        </Button>
        <Button onClick={handleLike} color="success" variant="outlined" size="small">
          Like
        </Button>
      </CardActions>
    </Card>
  );
}
