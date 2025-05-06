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
  // randomizing the pokemon pulled from the API
  const randomizer = Math.floor(Math.random() * 1000) + 1;
  const randomizer2  = Math.floor(Math.random() * 1000) + 1;

  // fetching data from API 
  const first_data = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomizer}`)
  const second = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomizer2}`)
  const pokemon: Pokemon = await first_data.json()
  const pokemon2: Pokemon = await second.json()
  
  return(
    <div>
      <h1> {pokemon.name} </h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
      <ul>
        {pokemon.types.map((p: { type: {name: string } }, index: number) => (
          <li key={index}>{p.type.name}</li>
        ))}
      </ul>
      <br></br>
      <h1> {pokemon2.name} </h1>
      <img src={pokemon2.sprites.front_default} alt={pokemon2.name}/>
      <ul>
        {pokemon2.types.map((p: { type: {name: string } }, index: number) => (
          <li key={index}>{p.type.name}</li>
        ))}
      </ul>
    </div>
  )
}