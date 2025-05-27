"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "./../../lib/supabase";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../../styles/Stats.css";

type Vote = {
  pokemon_name: string;
  types: string[];
  liked: boolean;
};

export default function StatsPage() {
  const [votes, setVotes] = useState<Vote[]>([]);

  useEffect(() => {
    const fetchVotes = async () => {
      const { data } = await supabase.from("pokemon_votes").select("*");
      if (data) setVotes(data);
    };
    fetchVotes();
  }, []);

  const liked = votes.filter((v) => v.liked);
  const disliked = votes.filter((v) => !v.liked);
  const total = votes.length;
  const likeRatio = total ? Math.round((liked.length / total) * 100) : 0;

  // Helper to count types
  const countTypes = (pokemonList: Vote[]) => {
    const typeCounts: Record<string, number> = {};
    pokemonList.forEach((p) => {
      p.types.forEach((type) => {
        typeCounts[type] = (typeCounts[type] || 0) + 1;
      });
    });
    return Object.entries(typeCounts).map(([name, count]) => ({ name, count }));
  };

  const likedTypesData = countTypes(liked);
  const dislikedTypesData = countTypes(disliked);

  return (
    <div className="stats">
      <h1>Stats</h1>
      <p>Total Votes: {total}</p>
      <p>Liked: {liked.length}</p>
      <p>Disliked: {disliked.length}</p>
      <p>Like Ratio: {likeRatio}%</p>

      <h2>Most Liked Types</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={likedTypesData}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, "dataMax"]} allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h2>Most Disliked Types</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dislikedTypesData}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, "dataMax"]} allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#ef4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}