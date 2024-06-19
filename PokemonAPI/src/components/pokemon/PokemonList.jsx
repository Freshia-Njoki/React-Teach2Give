import './pokemonList.scss'

export default function PokemonList({pokemon}) {
  return (
    <div className='pokemon'>
        {pokemon.map(pokemonName=>(
            <div className='Pitem' key={pokemonName}>Pokemon Name: {pokemonName} </div>
        ))}
    </div>
  )
}
