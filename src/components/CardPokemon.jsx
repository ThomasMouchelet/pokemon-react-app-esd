import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'

const CardPokemon = ({pokemon}) => {
    return ( 
        <Card sx={{
            width: 500,
            mt: 5
        }} >
            <CardMedia
                component="img"
                height="194"
                image={pokemon.sprites['front_default']}
                alt="Paella dish"
            />
            <CardContent>
                <Link to={`/pokemon/${pokemon.id}`}>
                    <h2>{pokemon.name}</h2>
                </Link>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default CardPokemon;