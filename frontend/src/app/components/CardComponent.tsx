"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

// defining the properties of a Card
type CardProps = {
  name: string;
  image: string;
  types: string[];
  onLike: () => void;
  onDislike: () => void;
};

export default function CardComponent({ card }: { card: CardProps }) {
  return (
    <Card sx={{ width: 288, borderRadius: 3, boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
      <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 0 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ textTransform: 'capitalize', fontWeight: 'bold', mb: 1 }}>
          {card.name}
        </Typography>
        <CardMedia
          component="img"
          image={card.image || "/placeholder.png"}
          alt={card.name}
          sx={{ width: 128, height: 128, objectFit: 'contain', mb: 2 }}
        />
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center', mb: 2 }}>
          {card.types.map((type, index) => (
            <Chip
              key={index}
              label={type}
              sx={{ textTransform: 'capitalize', bgcolor: 'primary.light', color: 'primary.dark', fontSize: 14 }}
              size="small"
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', width: '100%' }}>
        <Button onClick={card.onDislike} color="error" variant="outlined" size="small">
          Dislike
        </Button>
        <Button onClick={card.onLike} color="success" variant="outlined" size="small">
          Like
        </Button>
      </CardActions>
    </Card>
  );
}
