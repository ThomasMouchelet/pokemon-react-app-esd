import { LinearProgress } from '@mui/material';
import React, { useState } from 'react'
import CardPokemon from "./CardPokemon"
import CardPokemonSkeleton from "./CardPokemonSkeleton"
import FormPokemon from "./FormPokemon"

const ShowPagePokemon = () => {
    const [pokemon, setPokemon] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    return ( 
        <div>
            {isLoading && <LinearProgress />}
            <h1>Hello app</h1>
            <FormPokemon setPokemon={setPokemon} setIsLoading={setIsLoading} />
            {isLoading && <CardPokemonSkeleton />}
            {(pokemon.id && !isLoading) && <CardPokemon pokemon={pokemon} />}
        </div>
     );
}
 
export default ShowPagePokemon;