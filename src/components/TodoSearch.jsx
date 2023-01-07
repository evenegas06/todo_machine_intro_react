import React from 'react';
import { TextField } from '@mui/material';

const TodoSearch = () => {
    
    /* ----- Functions -----*/
    const search = (event) => {
        console.log(event.target.value);
    }

    return (
        <TextField 
            id='search-input'
            label='Buscar...'
            variant='outlined' 
            size='small'
            fullWidth
            onChange={search}
        />
    );
}

export default TodoSearch;