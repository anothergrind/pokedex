import React from 'react';
import "../styles/LikedPokemon.css"; 
import "../components/CardComponent"

export default function LikedPokemon() {
    return (
        <div className="liked-pokemon">
        <h1>Liked Pokemon</h1>
        <p>Here you can view the Pokemon you have liked.</p>
        {/* Add your logic to display disliked Pokemon here */}
        </div>
    );
}