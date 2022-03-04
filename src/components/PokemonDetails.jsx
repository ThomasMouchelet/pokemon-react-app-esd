import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findPokemonById } from "../services/pokemon.service";

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState({})
    const {id} = useParams()

    const fetchPokemon = async () => {
        try {
            const data = await findPokemonById(id)
            setPokemon(data)
        } catch (error) {
            
        }
    }

    // useEffect
    useEffect( () => {
        fetchPokemon()
    },[fetchPokemon])

   

    return ( 
        <div>
            Pokemon details

            <h1>{pokemon.name}</h1>
        </div>
     );
}
 
export default PokemonDetails;