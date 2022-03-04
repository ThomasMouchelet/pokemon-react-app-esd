import { Card, Skeleton } from '@mui/material';
import React from 'react'

const CardPokemonSkeleton = () => {
    return ( 
        <Card sx={{
            width: 500,
            mt: 5
        }} >
            <Skeleton variant="rectangular" width={500} height={194} />
            <Skeleton variant="text" />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </Card>
     );
}
 
export default CardPokemonSkeleton;