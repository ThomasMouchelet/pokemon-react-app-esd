import axios from "axios";

function findPokemonByName(pokemonName = "ditto"){
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => res.data)
}

export {
    findPokemonByName
}