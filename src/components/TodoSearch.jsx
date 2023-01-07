import React, { useState } from 'react';
import { TextField } from '@mui/material';

const TodoSearch = ({ searchValue, setSearchValue}) => {

    /* ----- Functions -----*/
    const search = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <TextField
            id='search-input'
            fullWidth
            label='Buscar...'
            onChange={search}
            size='small'
            value={searchValue}
            variant='outlined'
        />
    );
}

export default TodoSearch;