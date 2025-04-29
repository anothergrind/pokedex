// Defining what a Pokemon should have in it
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
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/1')
  const pokemon: Pokemon = await data.json()
  
  return(
    <div>
      <h1> {pokemon.name} </h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
      <ul>
        {pokemon.types.map((p: { type: {name: string } }, index: number) => (
          <li key={index}>{p.type.name}</li>
        ))}
      </ul>
    </div>
  )
}