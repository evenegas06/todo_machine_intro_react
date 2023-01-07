import React from 'react';
import { TextField } from '@mui/material';

const TodoSearch = () => {
    return (
        <TextField 
            id='search-input'
            label='Buscar...'
            variant='outlined' 
            size='small'
            fullWidth
        />
    );
}

export default TodoSearch;