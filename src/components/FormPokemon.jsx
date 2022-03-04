import React, { useState } from 'react'
import {TextField, Button} from '@mui/material';
import { findPokemonByName } from '../services/pokemon.service';
import { toast } from 'react-toastify';

function FormPokemon({setPokemon, setIsLoading}) {
    const [pokemonName, setPokemonName] = useState('')

    const handleChange = ({currentTarget}) => {
        const {value} = currentTarget
        setPokemonName(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout( async() => {
            try {
                const data = await findPokemonByName(pokemonName)
                console.log(data)
                setPokemon(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error.message)
                toast.error('Request error ')
            }
        }, 2000);
    }

    return (
      <div>
        <div>FormPokemon</div>
        <form onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined" 
                onChange={handleChange} 
            />
            <Button variant="contained" type="submit">Text</Button>
        </form>
      </div>
    )
}

export default FormPokemon